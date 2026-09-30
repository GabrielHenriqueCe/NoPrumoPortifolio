# No Prumo · Portfólio

Portfólio do **No Prumo**, sistema de gestão de obras do Projeto Integrador Entra21.

Site estático (HTML, CSS e JavaScript puro), sem etapa de build.

## Publicar na Vercel

1. Na Vercel, clique em **Add New… → Project** e importe este repositório.
2. Em **Framework Preset**, escolha **Other**. Deixe *Build Command* e *Output Directory* vazios.
3. Clique em **Deploy**.

## Rodar localmente

```bash
python3 -m http.server 4173
# abra http://localhost:4173
```

## Estrutura

```
index.html
assets/css/style.css
assets/js/main.js         animações de entrada
assets/img/logo.svg       logo vetorial (mesma do sistema)
assets/img/equipe/        fotos da equipe (480×480)
vercel.json
```
