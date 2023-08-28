---
author: "Ich"
title: IKEA FLOALT Reparatur
date: 2021-03-20
description: Reperatur von flackernder IKEA Lampe.
tags:
  - markdown
  - DIY
  - Elektro
  - IKEA
---
> [!warning]
> **Achtung! Versucht diese Reparatur nur, wenn ihr die Gefahren versteht. Hierbei können tödliche Spannungen offenliegen.**  

Das IKEA Trådfri System ist einfach und zuverlässig, denn es ist ja von einem großen Unternehmen. Denkt man.
Nach einigen Monaten oder Jahren fangen einige FLOALT LED-Paneele an zu flackern. Bei mir flackert das Paneel bei höheren Helligkeiten.

Zum Glück hat u/hulpfinger [auf Reddit](https://www.reddit.com/r/tradfri/comments/ac9vqr/blinking_flickering_floalt_panel/) bereits eine Lösung gefunden.
### Das Problem:
![Das Board](https://preview.redd.it/nden6bwcn9821.jpg?width=800&format=pjpg&auto=webp&v=enabled&s=d2747148245fc63262da49d5f6f66586f4c38a09)
_Bild von u/hulpfinger_  
Der Wiederstand R6 mit 47 Ohm auf der Board ist kaputt. Der Wiederstand sieht zwar nicht kaputt aus, aber wenn man nachmisst, dann wird ein vielfaches von den eigentlichen 47 Ohm angezeigt. Also muss dieser ersetzt werden. 
### Das Ersatzteil:
 * Der Originalwiederstand hat die Größe 1206 und verkraftet 250mW.  
 [Hier bei Reichelt](https://www.reichelt.de/smd-widerstand-1206-47-ohm-250-mw-1--wal-wr12x47r0ftl-p346682.html?&trstct=pos_0&nbc=1)
 * Da dieser aber offensichtlich nicht stark genug ist, empfehle ich einen stärkeren. Ein passender, kräftiger Wiederstand hat die Größe 0204 und verkraftet 400mW.
 [Hier bei Reichelt](https://www.reichelt.de/melf-widerstand-0204-47-ohm-400-mw-1--vit-zc204-47r-p277736.html?&trstct=pos_1&nbc=1)
 * Optional könnt ihr auch versuchen, einen axialen Wiederstand zu verlöten.
 [Hier bei Reichelt](https://www.reichelt.de/widerstand-metalloxyd-47-ohm-0207-1-0-w-5--1w-47-p1824.html?&trstct=pos_3&nbc=1)
### Die Reparatur:
Nehmt das Paneel von der Wand oder Decke ab, dazu müsst ihr die Schrauben auf der einen Seite herausschrauben, dann könnt ihr versuchen, das Paneel ihm Rahmen nach oben zu schieben, um so an den Metallclip zu kommen, welcher es fixiert. Wenn ihr den unteren auf der Seite der Schrauben gelöst habt, könnt ihr ganz einfach das Paneel von der Wand nehmen. Denkt daran, den 230V-Stecker auszustecken. Dabei könnte euch ein Schlitz-Schraubendreher helfen.  

Nun könnt ihr das Paneel abnehmen und ablegen. Versucht, die Vorderseite nicht zu zerkratzen. Dann könnt ihr auch den LED-Stecker abstecken und die zwei Schrauben vom Driver-Modul lösen.  

**ACHTUNG! Ab Hier gibt es Hochspannung! Seid Vorsichtig!**  
Die Kondensatoren werden zwar dank entsprechender Wiederstände schnell entladen, es kann aber trotzdem noch eine hohe Spannung vorhanden sein. Messt lieber nach.

Nun könnt ihr das Driver-Modul öffnen, indem ihr die Schrauben auf der Rückseite löst. Der Wiederstand R6 befindet sich auf der Rückseite, also auf der Seite ohne große Elektrolyt-Kondensatoren.  
Lötet den Wiederstand ab. Ihr könnt auch die nebenliegende Diode D3 als Hebelpunkt mit z. B. einer Pinzette nutzen.  
Danach wird der neue Wiederstand angelötet. Am besten macht ihr erst etwas Lötzinn auf die beiden Stellen. Dann könnt ihr den Wiederstand mit einer Pinzette in Position halten. Nun könnt ihr mit dem Lötkolben erst die eine, dann die andere Seite festschmelzen. Achtet darauf, dass ihr keine Verbindung von den Lötstellen von R6 zu D3 herstellt.
**Achtung! Testet das Board nicht, ohne das Cover wieder zu schließen. Ansonsten habt ihr offenliegende, tödliche Spannung!**

Ich hoffe ich konnte jemandem mit diesem Tutorial helfen. :D
