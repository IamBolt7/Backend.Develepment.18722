const examples=[
 {name:'Extract fields',sql:"SELECT name, profile->>'city' AS city\nFROM users\nORDER BY name;",result:'Aarav Sharma  | Dehradun\nIshita Rao    | Bengaluru\nKabir Singh   | Dehradun\nMeera Kapoor  | Delhi'},
 {name:'Nested value',sql:"SELECT name, profile->'preferences'->>'theme' AS theme\nFROM users\nWHERE profile->'preferences'->>'theme' = 'dark';",result:'Aarav Sharma | dark\nIshita Rao   | dark\nKabir Singh  | dark'},
 {name:'Containment @>',sql:"SELECT name\nFROM users\nWHERE profile @> '{\"city\":\"Dehradun\"}'::jsonb;",result:'Aarav Sharma\nKabir Singh'},
 {name:'Array search',sql:"SELECT name, profile->'skills' AS skills\nFROM users\nWHERE profile->'skills' @> '[\"PostgreSQL\"]'::jsonb;",result:'Aarav Sharma | ["PostgreSQL", "Node.js", "Git"]\nKabir Singh  | ["Python", "PostgreSQL"]'},
 {name:'Update JSONB',sql:"UPDATE users\nSET profile = jsonb_set(profile, '{preferences,theme}', '\"light\"'::jsonb, true)\nWHERE email = 'aarav@example.com';",result:'UPDATE 1\nNested theme changed without replacing the document.'},
 {name:'GIN index',sql:"CREATE INDEX idx_users_profile_gin\nON users USING GIN (profile);",result:'CREATE INDEX\nOptimizes common JSONB containment/key queries.'}
];
const tabs=document.querySelector('#tabs'),sql=document.querySelector('#sql'),result=document.querySelector('#result');
function show(i){[...tabs.children].forEach((b,j)=>b.classList.toggle('active',i===j));sql.textContent=examples[i].sql;result.textContent=examples[i].result}
examples.forEach((x,i)=>{const b=document.createElement('button');b.textContent=x.name;b.onclick=()=>show(i);tabs.appendChild(b)});show(0);
document.querySelector('#copy').onclick=async e=>{await navigator.clipboard.writeText(sql.textContent);e.target.textContent='Copied!';setTimeout(()=>e.target.textContent='Copy SQL',1200)};
document.querySelector('#theme').onclick=()=>document.body.classList.toggle('light');
