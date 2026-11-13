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

## Mac App Store

- Die Fassung aus dem Mac App Store läuft in der Sandbox von macOS. Sie öffnet nur Projekte und Ordner, die Sie selbst gewählt, im Finder geöffnet oder hineingezogen haben, und merkt sich diesen Zugriff für die nächsten Starts. Wird ein Projekt außerhalb von Atramentum verschoben, wählen Sie es einmal neu über **Ablage › Öffnen …**.
- Neue Projekte schlägt sie im eigenen Ordner der App vor. Sie können jeden anderen Ort wählen.
- Updates kommen über den App Store. Das Rettungswerkzeug gehört nicht dazu, siehe [Rettungsanleitung](RETTUNG.md).

## Gleichzeitiges Arbeiten und Cloud

- Abgleich zwischen Geräten gibt es über einen Sync-Ordner (siehe Einführung). Eine direkte Anbindung an Cloud-Dienste ist nicht vorgesehen; unter Android braucht der Abgleich deshalb eine Sync-App eines anderen Anbieters. Noch nicht: Verschlüsselung der Pakete (sie liegen lesbar in Ihrem eigenen Cloud-Speicher). Alte Pakete bleiben im Sync-Ordner liegen; neue Geräte lesen dank Schnappschüssen trotzdem nur wenige Dateien. Nutzen die Geräte verschiedene Atramentum-Versionen, übernimmt das ältere Änderungen des neueren erst nach einem Update (es meldet „Update nötig“). Gleichzeitiges Umordnen derselben Kapitel auf zwei Geräten kann eine ungewohnte Reihenfolge ergeben.
- Ein Projekt darf nicht in iCloud Drive, Dropbox, OneDrive, Google Drive oder einem ähnlich abgeglichenen Ordner liegen. Atramentum erkennt solche Orte und bietet an, das Projekt lokal zu kopieren. Sicherungsarchive dürfen dagegen in der Cloud liegen.
- Ein Projekt kann nur von einer laufenden Atramentum-Instanz zugleich geöffnet werden.

## Externe Platten und USB-Sticks

- **Trennen während der Arbeit:** Wird ein Datenträger mit geöffnetem Projekt abgezogen, bleibt der Text im Fenster. Die Statusleiste meldet, dass der Datenträger fehlt. Schließen Sie ihn wieder an, speichert Atramentum von selbst weiter. Bis dahin bestätigte Stände bleiben erhalten (geprüft in 25 Durchläufen).
- **Stromausfall und Abziehen ohne Auswerfen:** Atramentum verlangt nach jedem Speichern, dass der Datenträger alles bis auf das Speichermedium schreibt. Manche USB-Gehäuse und -Sticks bestätigen das, bevor die Daten wirklich gesichert sind. Fällt bei einem solchen Gerät der Strom aus, können die letzten Sekunden fehlen. Werfen Sie externe Datenträger deshalb immer im Finder aus, bevor Sie sie abziehen, und legen Sie regelmäßig Sicherungen an.

## Text und Gestaltung

- **Auszeichnungen im Text:** Absätze, drei Überschriftenebenen, Szenentrenner, Fett, Kursiv, Unterstreichung, Listen (Aufzählung und Nummerierung, drei Ebenen), Fußnoten, Kommentare, Bilder und Tabellen.
- **Bilder:** PNG, JPEG, GIF und WebP bis 25 MB je Bild. Im PDF erscheinen PNG und JPEG; GIF und WebP stehen dort als Platzhalter „[Bild: …]“. Ein Bild steht immer als eigener Block zwischen Absätzen (kein Text daneben).
- **Tabellen:** Zellen enthalten einfachen Text (Fett, Kursiv und Unterstreichung bleiben erhalten), keine Absätze, Listen oder Bilder; verbundene Zellen gibt es nicht. Bearbeitet wird eine Tabelle in einem eigenen Fenster (Tabelle antippen). Höchstens 30 Spalten und 2000 Zeilen. Im PDF sind alle Spalten gleich breit.
- **Zählung:** Wörter und Zeichen folgen einer festen, dokumentierten Regel. Andere Programme zählen teils anders, Abweichungen von wenigen Prozent sind normal.

## Rechtschreibung und Grammatik

- Geprüft wird mit der Prüfung des jeweiligen Systems:
  - **Mac:** Rechtschreibung und Grammatik.
  - **Windows:** Rechtschreibung (Windows bringt keine Grammatikprüfung für Programme mit).
  - **Linux:** Rechtschreibung über Enchant. Dafür muss das Wörterbuch der Sprache installiert sein, etwa das Paket `hunspell-de-de`.
  - **iPhone und iPad:** Rechtschreibung des Systems (ohne Grammatik).
  - **Android:** der Rechtschreibdienst des Geräts, meist Gboard, teils mit Grammatikhinweisen. Er prüft nur Sprachen, deren Wörterbuch auf dem Gerät geladen ist.
- Eine vollständige Grammatikprüfung wie in Papyrus Autor bietet Atramentum nicht. Dafür bräuchte es eine große Fremdbibliothek oder einen Onlinedienst, und beides schließt Atramentum bewusst aus.
- Die eigenen Regeln sind absichtlich vorsichtig und melden nur wenige, sehr wahrscheinliche Fehler.

## Stilanalyse

- Die Hinweise beruhen auf einfachen Regeln, nicht auf einem Sprachmodell. Sie erkennen typische Muster, aber nicht jeden Fall:
  - Passiv wird nur angenähert, starke Partizipien ohne „ge-“ (etwa „vergessen“) fallen durch.
  - Namen gelten bei Wortwiederholungen wie andere Wörter.
- Hinweise gibt es für Deutsch und Englisch (nach der Projektsprache). In anderen Sprachen zeigt die Leiste nur Kennzahlen und lange Sätze.
- Die Lesbarkeit nach Flesch zählt Silben näherungsweise über Vokalgruppen.

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
  - Übernommen werden Kapitel und Szenen über die Formatvorlagen „Überschrift 1/2“, dazu Text, Fett, Kursiv, Unterstreichung, Listen, Fuß- und Endnoten (als Fußnoten), Kommentare und Bilder.
  - Tabellen kommen als Tabellen an; verbundene Zellen werden aufgeteilt, Tabellen in Tabellen werden zu Text. Textfelder und Zeichnungen gehen verloren. Der Importbericht nennt sie.
- **Markdown und Text:** Links behalten nur ihren Text.
- **Ohne Überschriften-Formatvorlagen:** Fehlen sie, landet alles in einem Kapitel. Atramentum rät keine Struktur aus Schriftgrößen.
- **Scrivener (2 und 3):** Importiert wird der Projektordner „….scriv“ bzw. die Datei „….scrivx“ darin (auf dem Computer; auf Telefon und Tablet lässt sich kein Projektordner wählen). Ordner im Manuskript werden Kapitel, Texte Szenen, tiefere Ordner werden aufgelöst. Synopsis und Dokumentnotizen werden die Szenennotiz. Ordner wie „Characters/Figuren“ und „Places/Orte“ werden Figuren und Orte, übrige Texte Notizen. Nicht übernommen: Kommentare, Schlagwörter, Status und Etiketten, Schnappschüsse, Kompilier-Einstellungen sowie PDFs, Bilder und Webseiten aus der Recherche; Bilder im TIFF-Format. Scrivener 1 wird nicht unterstützt.
- **Papyrus Autor und ähnliche Programme:** Es gibt keinen Direktimport, weil das Dateiformat nicht offengelegt ist. Exportieren Sie dort als Word-Datei und importieren Sie diese in Atramentum.
- **Obergrenzen:** Abgelehnt werden Dateien über 512 MB oder mit mehr als 20 000 Szenen sowie einzelne Bilder über 25 MB.

## Export

- **PDF – Schriften:** Es werden die Standardschriften Courier (Normseite) und Times (Leseexemplar) verwendet. Sie werden nicht eingebettet.
- **PDF – Zeichen:**
  - Darstellbar sind europäische Zeichen, Anführungszeichen und Gedankenstriche.
  - Emoji, griechische, kyrillische und andere Schriften erscheinen als „?“. Die PDF-Vorschau nennt vor dem Speichern die Anzahl.
- **Normseite:** Atramentum verwendet eine verbreitete Variante mit 30 Zeilen zu 60 Anschlägen. Fragen Sie Ihren Verlag, ob er eine andere wünscht.
- **Word:** Die Datei ist schlicht gehalten (Standard: Times New Roman 12 pt, 1,5-zeilig, A4) und eher für das Lektorat gedacht als für einen fertigen Satz. Unter **Ausgabe gestalten …** lassen sich Format, Schrift (Times New Roman oder Courier New), Größe, Zeilenabstand und Rand ändern.
- **Ausgabe gestalten:** Zur Wahl stehen nur Times und Courier, weil das PDF die Standardschriften nutzt und nichts einbettet. Seitenzahlen beginnen nach der Titelei nicht neu, sie wird mitgezählt. Die Gestaltung gilt auf dem Gerät, auf dem sie eingestellt wurde, und wandert nicht durch den Abgleich. In der Sicherung ist sie enthalten. Im E-Book bestimmt das Lesegerät Schrift und Seitenformat; dort wirken Titelei, Widmung, Impressum und Szenentrenner.
- **E-Book (EPUB 3):** Eine schlichte, gut lesbare Gestaltung ohne Wahl von Schriften oder Vorlagen. Kommentare kommen nicht ins Buch, Fußnoten werden E-Book-Fußnoten. Das Titelbild muss ein PNG- oder JPEG-Bild sein. Geprüft wird jedes Buch-Beispiel mit epubcheck, dem Prüfwerkzeug des W3C. Für Kindle laden Sie die EPUB-Datei bei Amazon KDP hoch; ein eigenes Kindle-Format erzeugt Atramentum nicht.

## Vorlesen

- Die Stimme kommt vom System. Wie natürlich sie klingt und welche Sprachen es gibt, hängt vom Gerät ab.
- **Android und Linux:** Die Webansicht hat dort meist keine eigene Sprachausgabe. Atramentum spricht dann über die Sprachausgabe des Systems (Android: TextToSpeech, Linux: speech-dispatcher), aber ohne mitlaufende Markierung. Unter Linux muss `speech-dispatcher` installiert sein.

## Geteilte Ansicht

- Das zweite Blatt ist nur zum Lesen. Geschrieben wird immer im Haupttext. Zeigt das zweite Blatt dieselbe Szene, aktualisiert es sich nach jedem Speichern.

## Größe

Geprüft sind Manuskripte mit rund 200 000 Wörtern und Szenen mit 30 000 Wörtern. Größere Projekte funktionieren voraussichtlich, sind aber nicht gemessen.
