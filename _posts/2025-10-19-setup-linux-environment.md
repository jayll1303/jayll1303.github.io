---
layout: post
title: "Setup Linux Environment"
date: 2025-10-20 00:33:00 +0000
categories: [IT]
tags: [linux,git,python]
---

## Git & Github

``` bash
sudo apt update
# install git
apt-get install git
# install gh
sudo apt install gh
# login
gh auth login
```

## Python

```bash
# install miniconda (for python environment management)
sudo apt-get install wget
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh
bash ~/Miniconda3-latest-Linux-x86_64.sh
```