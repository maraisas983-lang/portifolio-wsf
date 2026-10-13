# WSF Studio ? Portf?lio

Site est?tico organizado a partir do HTML enviado, preservando o conte?do, o visual e as anima??es.

## Como abrir

Abra `index.html` no navegador. N?o precisa instalar depend?ncias nem compilar.

Para servir por HTTP, se tiver Python instalado, execute nesta pasta:

```powershell
python -m http.server 8000
```

Acesse http://localhost:8000. Para encerrar o servidor, pressione Ctrl+C.

## Arquivos

- `index.html`: estrutura e conte?do da p?gina.
- `assets/css/styles.css`: estilos e responsividade.
- `assets/js/main.js`: intera??es, servi?os, projetos e anima??es.
- `assets/js/frames.js`: lista dos quadros usados na anima??o.
- `assets/images/frames/`: imagens WebP extra?das do HTML original.

## Personaliza??o

O n?mero do WhatsApp est? na constante `WA_NUMBER`, no in?cio de `assets/js/main.js`. Use DDI + DDD + n?mero, somente d?gitos.

As listas `SV`, `PJ` e `PS` no mesmo arquivo definem os servi?os, projetos e etapas do processo.

Google Fonts, GSAP, ScrollTrigger e Lenis continuam carregados pelos endere?os externos do HTML original. ? necess?rio acesso ? internet para carreg?-los.
