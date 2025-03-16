---
weight: 1000
title: "Cities: Skylines 2"
description: ""
icon: "article"
date: "2025-03-15T21:14:22+01:00"
lastmod: "2025-03-15T21:14:22+01:00"
draft: true
toc: true
---

## Skyve

{{< alert context="info" text="Skyve is a Mod Manager for C:S 2" />}}

Running Skyve under Linux can be a difficult task. This guide however (hopefully) will make it easier for you to install and launch it without any issues

### Prerequisites

You will have to install the following packages: ``wine`` and ``winetricks``. Below you can preview install instructions for those packages.

{{<tabs tabTotal="3">}}
{{% tab tabName="Debian-Based" %}}

```bash
$ sudo apt install wine && sudo apt install winetricks
```

{{% /tab %}}
{{% tab tabName="Arch-Based" %}}

```bash
$ sudo pacman -S wine winetricks
```

{{% /tab %}}
{{% tab tabName="Fedora-Based" %}}

```bash
$ sudo dnf install wine winetricks
```

{{% /tab %}}
{{< /tabs >}}

This guide also assumes you have installed C:S2 via **Steam** on default game path.

### Step 1. Download Skyve
