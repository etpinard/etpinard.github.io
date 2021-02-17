# etpinard.xyz

[![Dependency Status](https://david-dm.org/etpinard/etpinard.github.io.svg?style=flat-square)](https://david-dm.org/etpinard/etpinard.github.io)
[![devDependency Status](https://david-dm.org/etpinard/etpinard.github.io/dev-status.svg?style=flat-square)](https://david-dm.org/etpinard/etpinard.github.io?type=dev)

Personal web page.


### Deployment

Commit code to `source` branch, which is now the default branch on GitHub.

The `master` branch contains the built assets served on GitHub pages.


### Trick to shrink GIFs

```
sudo apt install gifsicle

# e.g
gifsicle old.gif "#0-70" -O3 --scale 0.5 --optimize --colors 16 -o new.gif

# 0-70 is the frame range
# find out how many frames there are in your gif using ImageMagick
identify old.gif
```

---

This site is hosted on GitHub Pages and built with yo-yo / tachyons / Hero Patterns.

2021 Étienne Tétreault-Pinard. MIT License

[![Standard - JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
