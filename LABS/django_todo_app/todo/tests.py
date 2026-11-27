from django.test import TestCase
from django.urls import reverse

from .models import Task


class TodoViewsTests(TestCase):
    def test_task_list_loads(self):
        response = self.client.get(reverse("task_list"))
        self.assertEqual(response.status_code, 200)

    def test_add_task(self):
        response = self.client.post(reverse("add_task"), {"title": "Finish Django lab"})
        self.assertRedirects(response, reverse("task_list"))
        self.assertTrue(Task.objects.filter(title="Finish Django lab").exists())

    def test_blank_task_is_rejected(self):
        response = self.client.post(reverse("add_task"), {"title": "   "})
        self.assertEqual(response.status_code, 200)
        self.assertEqual(Task.objects.count(), 0)

    def test_toggle_requires_post(self):
        task = Task.objects.create(title="Test task")
        response = self.client.get(reverse("toggle_task", args=[task.id]))
        self.assertEqual(response.status_code, 405)

    def test_toggle_task(self):
        task = Task.objects.create(title="Test task")
        self.client.post(reverse("toggle_task", args=[task.id]))
        task.refresh_from_db()
        self.assertTrue(task.completed)

    def test_delete_task(self):
        task = Task.objects.create(title="Delete me")
        self.client.post(reverse("delete_task", args=[task.id]))
        self.assertFalse(Task.objects.filter(id=task.id).exists())
