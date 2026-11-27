from django.contrib import messages
from django.shortcuts import get_object_or_404, redirect, render
from django.views.decorators.http import require_POST

from .forms import TaskForm
from .models import Task


def task_list(request):
    tasks = Task.objects.all()
    context = {
        "tasks": tasks,
        "total_count": tasks.count(),
        "completed_count": tasks.filter(completed=True).count(),
        "pending_count": tasks.filter(completed=False).count(),
    }
    return render(request, "todo/task_list.html", context)


def add_task(request):
    if request.method == "POST":
        form = TaskForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, "Task added successfully.")
            return redirect("task_list")
    else:
        form = TaskForm()

    return render(request, "todo/add_task.html", {"form": form})


@require_POST
def toggle_task(request, task_id):
    task = get_object_or_404(Task, pk=task_id)
    task.completed = not task.completed
    task.save(update_fields=["completed"])
    messages.success(request, "Task status updated.")
    return redirect("task_list")


@require_POST
def delete_task(request, task_id):
    task = get_object_or_404(Task, pk=task_id)
    task.delete()
    messages.success(request, "Task deleted.")
    return redirect("task_list")
