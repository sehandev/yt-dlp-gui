# yt-dlp GUI

A simple cross-platform desktop app for [yt-dlp](https://github.com/yt-dlp/yt-dlp), built with Tauri. Supports Windows, macOS, and Linux.

## Features
- Modern GUI for downloading videos using yt-dlp
- Cross-platform: Windows, macOS, Linux

## Tech Stack
- **Frontend:** [Bun](https://bun.sh/), [React (Vite)](https://vitejs.dev/), [TypeScript](https://www.typescriptlang.org/), [shadcn/ui](https://ui.shadcn.com/)
- **Backend:** [Tauri 2.0 (Rust)](https://tauri.app/), [yt-dlp (Rust bindings)](https://crates.io/crates/yt_dlp)

### Tauri Plugins
- [Clipboard](https://tauri.app/plugin/clipboard/) for checking uri that user copied
- [Dialog](https://tauri.app/plugin/dialog/) for asking user where to download video
- [Notification](https://tauri.app/plugin/notification/) for notifying end of downloading to user
- [Opender](https://tauri.app/plugin/opener/) for opening downloaded video
- [Single Instance](https://tauri.app/plugin/single-instance/)
- [Update](https://tauri.app/plugin/updater/) for auto-update

## Getting Started

```sh
cd yt-dlp-tauri
bun install
bun run tauri dev
```

## License

MIT
