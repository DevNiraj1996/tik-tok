# Tic-Tac-Toe

A browser-based **Tic-Tac-Toe** game built with **React + Vite** and hosted on GitHub Pages.

🎮 **[Play the game →](https://devniraj1996.github.io/tik-tok/)**

---

## Features

- 🎯 Two-player Tic-Tac-Toe (X vs O)
- 🏆 Win detection with highlighted winning squares
- 🤝 Draw detection
- 📊 Scoreboard that tracks wins across multiple games
- 🕐 Move history — jump back to any previous game state
- 🔄 New Game & Reset Scores buttons
- 📱 Responsive design (works on desktop and mobile)

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| [React 19](https://react.dev) | UI framework |
| [Vite 7](https://vite.dev) | Build tool & dev server |
| [GitHub Actions](https://github.com/features/actions) | CI/CD pipeline |
| [GitHub Pages](https://pages.github.com) | Hosting |

---

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm

### Install & run locally

```bash
# Clone the repository
git clone https://github.com/DevNiraj1996/tik-tok.git
cd tik-tok

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production

```bash
npm run build
```

The production-ready files are generated in the `dist/` folder.

---

## Deployment

The app is automatically deployed to GitHub Pages whenever changes are pushed to the `main` branch via the [GitHub Actions workflow](.github/workflows/deploy.yml).

**Live URL:** `https://devniraj1996.github.io/tik-tok/`

---

## How to Play

1. The game starts with **Player X**.
2. Players take turns clicking an empty square to place their mark.
3. The first player to get **3 in a row** (horizontally, vertically, or diagonally) wins.
4. If all 9 squares are filled with no winner, it's a **draw**.
5. Click **New Game** to start a fresh board (scores are kept).
6. Click **Reset Scores** to clear the scoreboard and start over.
7. Use the **Move History** panel to travel back to any previous move.

---

## Project Structure

```
tik-tok/
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions deploy workflow
├── public/                  # Static assets
├── src/
│   ├── components/
│   │   ├── Board.jsx        # 3×3 game board
│   │   ├── Game.jsx         # Game logic & state
│   │   └── Square.jsx       # Individual cell button
│   ├── App.css              # Game styles
│   ├── App.jsx              # Root component
│   ├── index.css            # Global styles
│   └── main.jsx             # Entry point
├── index.html
├── package.json
└── vite.config.js
```

---

## License

MIT
