# Rettungsanleitung

Diese Anleitung hilft, wenn sich ein Projekt nicht mehr öffnen lässt oder Text zu fehlen scheint. Die Schritte sind nach Aufwand geordnet. Gehen Sie sie in dieser Reihenfolge durch und hören Sie auf, sobald Ihr Text wieder da ist.

**Zuerst:** Löschen, verschieben oder überschreiben Sie nichts. Machen Sie im Finder eine Kopie des betroffenen Projektordners (`Name.atramentum`) an einen anderen Ort und arbeiten Sie nur mit Atramentum weiter.

## 1. Fassungen einer Szene

Fehlt nur Text in einer Szene, etwa nach versehentlichem Löschen oder Überschreiben:

1. Öffnen Sie die Szene.
2. Wählen Sie **Ablage › Fassungen anzeigen** (⌥⌘S).
3. Wählen Sie einen früheren Stand und stellen Sie ihn wieder her.

Atramentum sichert beim Schreiben höchstens alle 10 Minuten automatisch eine Fassung. Fassungen der letzten 24 Stunden bleiben vollständig erhalten, ältere werden ausgedünnt. Den aktuellen Stand sichert Atramentum vor dem Wiederherstellen ebenfalls, sodass Sie den Schritt zurücknehmen können.

## 2. Papierkorb

Fehlt eine ganze Szene oder ein Kapitel, prüfen Sie **Ablage › Papierkorb anzeigen**. Was dort liegt, lässt sich wiederherstellen.

## 3. Automatische Sicherung

Atramentum legt beim Arbeiten etwa einmal täglich eine Sicherung jedes geöffneten Projekts an. Aufbewahrt werden die jüngste Sicherung je Tag der letzten 7 Tage und die jüngste je Woche der letzten 4 Wochen. Sie liegen hier:

| System | Ordner |
| --- | --- |
| Mac | `~/Library/Application Support/io.github.sammielpadre.atramentum/Sicherungen/` |
| Windows | `%APPDATA%\io.github.sammielpadre.atramentum\Sicherungen\` |
| Linux | `~/.local/share/io.github.sammielpadre.atramentum/Sicherungen/` |

So kommen Sie hin: auf dem Mac im Finder **Gehe zu › Gehe zum Ordner …** wählen und den Pfad einfügen, unter Windows den Pfad in die Adresszeile des Explorers einfügen, unter Linux im Dateimanager (versteckte Ordner einblenden). Jeder Unterordner gehört zu einem Projekt, und der Dateiname ist der Zeitpunkt der Sicherung.

So stellen Sie eine Sicherung wieder her:

1. Wählen Sie in Atramentum **Ablage › Aus Sicherung wiederherstellen …** (Windows/Linux: **Datei**).
2. Wählen Sie die passende `.atramentumsicherung`-Datei.

Dabei entsteht ein neues Projekt. Das beschädigte bleibt unverändert.

## 4. Eigene Sicherungen

Haben Sie mit **Ablage › Sicherung erstellen …** selbst Sicherungen angelegt, etwa auf einem USB-Stick, stellen Sie sie genauso wieder her wie in Schritt 3.

## 5. Rettungswerkzeug

Öffnet Atramentum das Projekt gar nicht mehr, holt das Rettungswerkzeug die Texte heraus. Auf dem Mac liegt es in Atramentum selbst, für Windows und Linux gibt es es als eigene Datei auf der Download-Seite (`atramentum-rettung-windows-x64.exe`, `atramentum-rettung-linux-x64`). Es arbeitet nur lesend: Am Projekt ändert es nichts, auch keine Umstellung des Dateiformats. Es liest auch ältere und neuere Projektversionen sowie beschädigte Dateien, so weit sie lesbar sind.

1. Öffnen Sie das Programm **Terminal** (unter Programme › Dienstprogramme).
2. Tippen Sie den folgenden Befehl mit einem Leerzeichen am Ende, aber drücken Sie noch nicht ↩:
   ```
   /Applications/Atramentum.app/Contents/MacOS/atramentum-rettung 
   ```
3. Ziehen Sie den Projektordner (`Name.atramentum`) aus dem Finder in das Terminalfenster. Der Pfad wird eingefügt.
4. Drücken Sie ↩.

Unter Windows öffnen Sie die Eingabeaufforderung, ziehen erst `atramentum-rettung-windows-x64.exe` und dann den Projektordner hinein und drücken Eingabe. Unter Linux im Terminal: `chmod +x atramentum-rettung-linux-x64`, dann `./atramentum-rettung-linux-x64 ~/Atramentum/"Name.atramentum"`. Schließen Sie Atramentum vorher, unter Windows ist ein geöffnetes Projekt gesperrt.

Neben dem Projekt entsteht der Ordner **„Name gerettet“** mit diesem Inhalt:

| Datei | Inhalt |
| --- | --- |
| `Manuskript.md` | alle Kapitel und Szenen in der richtigen Reihenfolge, mit Fett und Kursiv |
| `Papierkorb.md` | gelöschte Szenen und Kapitel, die noch nicht endgültig entfernt waren |
| `Figuren.md`, `Orte.md`, `Notizen.md`, `Handlungsstraenge.md` | Bögen mit allen Angaben, Ständen je Kapitel und Notizen |
| `Pinnwand.md`, `Zeitstrahl.md` | Zettel nach Gruppen mit Verbindungen; Ereignisse in erzählter Reihenfolge mit ihren Szenen |
| `Fassungen/` | jede gespeicherte Fassung jeder Szene als eigene Datei |
| `Unlesbar/` | nur bei Schäden: der unveränderte Rohinhalt nicht lesbarer Szenen |
| `RETTUNGSBERICHT.txt` | was gefunden wurde und welche Probleme es gab |

Die `.md`-Dateien sind einfacher Text. Sie öffnen sich in jedem Texteditor, und Atramentum liest sie über **Ablage › Importieren** wieder ein.

Das Werkzeug liest außer Projektordnern auch:

- **Sicherungsarchive:** einfach die `.atramentumsicherung`-Datei statt des Projektordners hineinziehen.
- **Datenbankdateien:** einzelne `.sqlite`-Dateien, etwa die automatischen Sicherungen vor einer Formatumstellung im Ordner `sicherungen` des Projekts.

Optional geben Sie als zweite Angabe einen eigenen Zielordner an. Ein Zielordner, in dem schon etwas liegt, wird nie überschrieben.

Rückgabewerte für Fortgeschrittene:

| Wert | Bedeutung |
| --- | --- |
| 0 | alles gelesen |
| 1 | gerettet, aber mit Problemen (siehe Bericht) |
| 2 | falscher Aufruf |
| 3 | keine Rettung möglich, etwa weil die Datei kein Atramentum-Projekt ist |

## 6. Nichts hat geholfen

Melden Sie den Fall über **Hilfe › Fehler melden**. Legen Sie den `RETTUNGSBERICHT.txt` bei. Schicken Sie Ihr Manuskript nicht ungefragt mit.
