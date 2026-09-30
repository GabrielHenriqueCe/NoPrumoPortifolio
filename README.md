# No Prumo · Landing page

Página de apresentação do **No Prumo**, sistema de gestão de obras do Projeto Integrador Entra21.

Site estático (HTML, CSS e JavaScript puro), sem etapa de build.

## Publicar na Vercel

1. Na Vercel, clique em **Add New… → Project** e importe este repositório.
2. Em **Framework Preset**, escolha **Other**. Deixe *Build Command* e *Output Directory* vazios.
3. Clique em **Deploy**.

O QR Code da seção "Visite nosso stand" é gerado a partir do endereço em que a página está aberta.
Depois do deploy, ele já aponta para o domínio da Vercel. O botão **Baixar QR Code** salva um PNG
para usar nos slides e no stand.

## Rodar localmente

```bash
python3 -m http.server 4173
# abra http://localhost:4173
```

## Estrutura

```
index.html
assets/css/style.css
assets/js/main.js         QR Code, download do PNG e animações
assets/js/qrcode.js       biblioteca qrcode-generator (MIT, Kazuhiko Arase)
assets/img/logo.svg       logo vetorial (mesma do sistema)
assets/img/equipe/        fotos da equipe (480×480)
vercel.json
```

## Fontes dos números

| Número | Fonte |
|---|---|
| 7 em 10 construtoras no nível digital básico | BIM Fórum Brasil / CBIC, 2025 |
| +6,56% no custo da obra em 12 meses | FGV IBRE, INCC-M, ago/2026 |
| 806 mil acidentes de trabalho em 2025 | Ministério do Trabalho e Emprego, 2026 |
| 70.508 processos de hora extra | TST, ranking de 2024 |
| 191 mil empresas, R$ 198,9 bi, 2,5 mi trabalhadores | IBGE, PAIC 2024 |
| Lucro de referência de 7,4% | TCU, Acórdão 2622/2013 |
