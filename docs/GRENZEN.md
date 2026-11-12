# Bekannte Grenzen

Stand: Version 0.1.3 (Testfassung), November 2026. Hier steht, was Atramentum bewusst noch nicht kann oder nur vereinfacht macht. Fehler im Sinne von „funktioniert anders als beschrieben“ gehören nicht hierher, sondern in eine Fehlermeldung.

## Plattform und Ausstattung

- macOS 13 oder neuer, Windows 10 und 11 (64 Bit), Linux x86_64 (etwa Ubuntu 22.04 oder neuer), Android 7 oder neuer (Telefon und Tablet, Download über GitHub, nicht im Play Store). iPhone und iPad folgen über den App Store.
- Android ist neu und bisher nur auf dem Emulator geprüft. Dort gibt es keinen eigenen Diktatknopf (das Diktat der Bildschirmtastatur funktioniert), und PDF-Exporte gehen nur mit der Vorlage „Normseite“, weil Android die Schrift Times nicht mitbringt. Projekte liegen im geschützten Bereich der App und werden beim Deinstallieren gelöscht; vorher eine Sicherung anlegen und teilen.
- Windows und Linux sind neu: Gebaut und automatisch geprüft wird auf GitHub-Rechnern, von Hand getestet ist bisher vor allem der Mac. Diktat gibt es nur auf dem Mac, die Emoji-Auswahl nicht unter Linux.
- Oberfläche auf Deutsch, Englisch, Französisch, Spanisch, Portugiesisch und Italienisch. Die Übersetzungen sind neu; einzelne Hinweise für Bildschirmleser und einige Fehlermeldungen können noch deutsch erscheinen. Die Anleitungen gibt es nur auf Deutsch. Eine neue Sprache wirkt nach einem Neustart.
- Atramentum ist weder von Apple notarisiert noch mit einem Microsoft-Zertifikat signiert. Beim ersten Start ist deshalb eine Freigabe nötig, siehe die Installationsanleitung des jeweiligen Systems.
- Testfassung 1 (0.1.0) kann sich noch nicht selbst aktualisieren. Ab 0.1.1 geht das über **Hilfe › Nach Updates suchen …**.
- Es ist immer nur ein Projekt in einem Fenster geöffnet.

## Gleichzeitiges Arbeiten und Cloud

- Abgleich zwischen Geräten gibt es über einen Sync-Ordner (siehe Einführung). Eine direkte Anbindung an Cloud-Dienste ist nicht vorgesehen; unter Android braucht der Abgleich deshalb eine Sync-App eines anderen Anbieters. Noch nicht: Verschlüsselung der Pakete (sie liegen lesbar in Ihrem eigenen Cloud-Speicher). Alte Pakete bleiben im Sync-Ordner liegen; neue Geräte lesen dank Schnappschüssen trotzdem nur wenige Dateien. Nutzen die Geräte verschiedene Atramentum-Versionen, übernimmt das ältere Änderungen des neueren erst nach einem Update (es meldet „Update nötig“). Gleichzeitiges Umordnen derselben Kapitel auf zwei Geräten kann eine ungewohnte Reihenfolge ergeben.
- Ein Projekt darf nicht in iCloud Drive, Dropbox, OneDrive, Google Drive oder einem ähnlich abgeglichenen Ordner liegen. Atramentum erkennt solche Orte und bietet an, das Projekt lokal zu kopieren. Sicherungsarchive dürfen dagegen in der Cloud liegen.
- Ein Projekt kann nur von einer laufenden Atramentum-Instanz zugleich geöffnet werden.

## Externe Platten und USB-Sticks

- **Trennen während der Arbeit:** Wird ein Datenträger mit geöffnetem Projekt abgezogen, bleibt der Text im Fenster. Die Statusleiste meldet, dass der Datenträger fehlt. Schließen Sie ihn wieder an, speichert Atramentum von selbst weiter. Bis dahin bestätigte Stände bleiben erhalten (geprüft in 25 Durchläufen).
- **Stromausfall und Abziehen ohne Auswerfen:** Atramentum verlangt nach jedem Speichern, dass der Datenträger alles bis auf das Speichermedium schreibt. Manche USB-Gehäuse und -Sticks bestätigen das, bevor die Daten wirklich gesichert sind. Fällt bei einem solchen Gerät der Strom aus, können die letzten Sekunden fehlen. Werfen Sie externe Datenträger deshalb immer im Finder aus, bevor Sie sie abziehen, und legen Sie regelmäßig Sicherungen an.

## Text und Gestaltung

- **Auszeichnungen im Text:** Absätze, drei Überschriftenebenen, Szenentrenner, Fett und Kursiv.
- **Fehlt noch:** Unterstreichung, Listen, Fußnoten, Kommentare, Bilder und Tabellen.
- **Zählung:** Wörter und Zeichen folgen einer festen, dokumentierten Regel. Andere Programme zählen teils anders, Abweichungen von wenigen Prozent sind normal.

## Pinnwand, Zeitstrahl und Figurennetz

- **Pinnwand:**
  - Es gibt eine Pinnwand je Projekt.
  - Zettel enthalten Text ohne Fett oder Kursiv, keine Bilder und keine Freihandzeichnung.
  - Zettel lassen sich noch nicht mit Szenen oder Figuren verknüpfen.
  - Ausschnitt und Zoom merkt sich jeder Mac für sich.
- **Zeitstrahl:**
  - Eine Szene gehört zu höchstens einem Ereignis.
  - Zeitangaben sind freier Text. Danach wird nicht sortiert; maßgeblich ist die Reihenfolge, die du festlegst.
- **Figurennetz:**
  - Zeitpunkte sind die Ereignisse des Zeitstrahls; einen Zeitpunkt zwischen zwei Ereignissen gibt es nicht.
  - Beziehungen und Zustände trägst du selbst ein; Atramentum erkennt sie nicht aus dem Text.
  - Die Lage der Karten gilt für alle Zeitpunkte gleich.

## Import

- **Word (.docx):**
  - Übernommen werden Kapitel und Szenen über die Formatvorlagen „Überschrift 1/2“, dazu Text, Fett und Kursiv.
  - Bilder, Fuß- und Endnoten, Kommentare, Tabellen, Textfelder und Unterstreichungen gehen verloren. Der Importbericht nennt sie.
- **Markdown und Text:** Links behalten nur ihren Text, und Listen werden zu Absätzen.
- **Ohne Überschriften-Formatvorlagen:** Fehlen sie, landet alles in einem Kapitel. Atramentum rät keine Struktur aus Schriftgrößen.
- **Papyrus Autor, Scrivener und ähnliche Programme:** Es gibt keinen Direktimport. Exportieren Sie dort als Word-Datei und importieren Sie diese in Atramentum.
- **Obergrenzen:** Abgelehnt werden Dateien über 64 MB oder mit mehr als 20 000 Szenen.

## Export

- **PDF – Schriften:** Es werden die Standardschriften Courier (Normseite) und Times (Leseexemplar) verwendet. Sie werden nicht eingebettet.
- **PDF – Zeichen:**
  - Darstellbar sind europäische Zeichen, Anführungszeichen und Gedankenstriche.
  - Emoji, griechische, kyrillische und andere Schriften erscheinen als „?“. Die PDF-Vorschau nennt vor dem Speichern die Anzahl.
- **Normseite:** Atramentum verwendet eine verbreitete Variante mit 30 Zeilen zu 60 Anschlägen. Fragen Sie Ihren Verlag, ob er eine andere wünscht.
- **Word:** Die Datei ist schlicht gehalten (Times New Roman 12 pt, 1,5-zeilig) und eher für das Lektorat gedacht als für einen fertigen Satz.

## Größe

Geprüft sind Manuskripte mit rund 200 000 Wörtern und Szenen mit 30 000 Wörtern. Größere Projekte funktionieren voraussichtlich, sind aber nicht gemessen.
