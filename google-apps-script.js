/**
 * SCRIPT GOOGLE APPS SCRIPT - Marble5 Formulaires
 *
 * INSTRUCTIONS D'INSTALLATION :
 *
 * 1. Allez sur https://sheets.google.com et créez un nouveau Google Sheets
 *    - Nommez-le "Marble5 - Formulaires"
 *
 * 2. Créez 6 onglets (cliquez sur + en bas) et nommez-les :
 *    - Inscriptions Bêta
 *    - Bugs
 *    - Installation
 *    - Questions
 *    - Feedback
 *    - Autre
 *
 * 3. Dans chaque onglet, créez les en-têtes appropriés en ligne 1 :
 *
 *    INSCRIPTIONS BÊTA : Date | Prénom | Email | Appareil | Version Android | Source | Plateformes | Profil Joueur | Texte Libre
 *    BUGS : Date | Email | Appareil | Version Android | Moment | Description
 *    INSTALLATION : Date | Email | Appareil | Version Android | Type Problème | Description
 *    QUESTIONS : Date | Email | Sujet | Question
 *    FEEDBACK : Date | Email | Type | Message
 *    AUTRE : Date | Email | Sujet | Message
 *
 * 4. Dans Google Sheets, allez dans : Extensions > Apps Script
 *
 * 5. Supprimez tout le code existant et collez ce script
 *
 * 6. Modifiez SPREADSHEET_ID ci-dessous avec l'ID de votre Google Sheets
 *    (l'ID se trouve dans l'URL : https://docs.google.com/spreadsheets/d/VOTRE_ID_ICI/edit)
 *
 * 7. Sauvegardez (Ctrl+S)
 *
 * 8. Cliquez sur "Déployer" > "Gérer les déploiements" > icône crayon > "Nouveau version"
 *    (Si c'est la première fois : "Déployer" > "Nouveau déploiement" > Application Web > Tout le monde)
 *
 * 9. Validez et c'est bon ! L'URL reste la même.
 */

// ⚠️ REMPLACEZ PAR L'ID DE VOTRE GOOGLE SHEETS
const SPREADSHEET_ID = 'VOTRE_SPREADSHEET_ID_ICI';

// Email pour les notifications (optionnel - laissez vide pour désactiver)
const NOTIFICATION_EMAIL = 'marble5-team@googlegroups.com';

// Fonction qui reçoit les requêtes POST
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    // Ouvrir le spreadsheet
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet;
    let rowData;
    let emailSubject;
    let emailBody;

    // Router selon le type de formulaire
    switch (data.type) {

      case 'inscription_beta':
        sheet = ss.getSheetByName('Inscriptions Bêta') || ss.getSheets()[0];
        rowData = [
          data.date,
          data.prenom,
          data.email,
          data.appareil,
          data.version_android || 'Non spécifié',
          data.source,
          data.plateformes,
          data.profil_joueur,
          data.texte_libre || ''
        ];
        emailSubject = '🚀 Nouvelle inscription Bêta';
        emailBody = `
Nouvelle demande d'inscription à la bêta !

📋 DÉTAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Prénom : ${data.prenom}
Email : ${data.email}
Appareil : ${data.appareil}
Version Android : ${data.version_android || 'Non spécifié'}
Source : ${data.source}
Plateformes : ${data.plateformes}
Profil joueur : ${data.profil_joueur}/5

💬 Message :
${data.texte_libre || '(aucun message)'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Reçu le ${data.date}
        `;
        break;

      case 'bug_report':
        sheet = ss.getSheetByName('Bugs') || ss.getSheets()[0];
        rowData = [
          data.date,
          data.email,
          data.appareil,
          data.version_android || 'Non spécifié',
          data.moment_bug,
          data.description
        ];
        emailSubject = '🐛 Nouveau signalement de bug';
        emailBody = `
Nouveau bug signalé !

📋 DÉTAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Email : ${data.email}
Appareil : ${data.appareil}
Version Android : ${data.version_android || 'Non spécifié'}
Moment : ${data.moment_bug}

🐛 Description :
${data.description}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Reçu le ${data.date}
        `;
        break;

      case 'probleme_installation':
        sheet = ss.getSheetByName('Installation') || ss.getSheets()[0];
        rowData = [
          data.date,
          data.email,
          data.appareil,
          data.version_android || 'Non spécifié',
          data.type_probleme,
          data.description || ''
        ];
        emailSubject = '🔧 Problème d\'installation signalé';
        emailBody = `
Problème d'installation signalé !

📋 DÉTAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Email : ${data.email}
Appareil : ${data.appareil}
Version Android : ${data.version_android || 'Non spécifié'}
Type de problème : ${data.type_probleme}

📝 Description / Message d'erreur :
${data.description || '(aucune description)'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Reçu le ${data.date}
        `;
        break;

      case 'question':
        sheet = ss.getSheetByName('Questions') || ss.getSheets()[0];
        rowData = [
          data.date,
          data.email,
          data.sujet,
          data.description
        ];
        emailSubject = '❓ Nouvelle question';
        emailBody = `
Nouvelle question reçue !

📋 DÉTAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Email : ${data.email}
Sujet : ${data.sujet}

❓ Question :
${data.description}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Reçu le ${data.date}
        `;
        break;

      case 'feedback':
        sheet = ss.getSheetByName('Feedback') || ss.getSheets()[0];
        rowData = [
          data.date,
          data.email || '(anonyme)',
          data.type_feedback,
          data.description
        ];
        emailSubject = '💡 Nouveau feedback';
        emailBody = `
Nouveau feedback reçu !

📋 DÉTAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Email : ${data.email || '(anonyme)'}
Type : ${data.type_feedback}

💬 Message :
${data.description}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Reçu le ${data.date}
        `;
        break;

      case 'autre':
        sheet = ss.getSheetByName('Autre') || ss.getSheets()[0];
        rowData = [
          data.date,
          data.email,
          data.sujet,
          data.description
        ];
        emailSubject = '📩 Nouveau message';
        emailBody = `
Nouveau message reçu !

📋 DÉTAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Email : ${data.email}
Sujet : ${data.sujet}

📝 Message :
${data.description}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Reçu le ${data.date}
        `;
        break;

      default:
        throw new Error('Type de formulaire non reconnu: ' + data.type);
    }

    // Ajouter la ligne au spreadsheet
    sheet.appendRow(rowData);

    // Envoyer notification par email (optionnel)
    if (NOTIFICATION_EMAIL && emailSubject) {
      MailApp.sendEmail(NOTIFICATION_EMAIL, emailSubject + ' - Marble5', emailBody);
    }

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Fonction pour tester (exécutez-la manuellement pour vérifier que tout fonctionne)
function testScript() {
  const testData = {
    postData: {
      contents: JSON.stringify({
        type: 'inscription_beta',
        date: new Date().toLocaleString('fr-FR'),
        prenom: 'Test',
        email: 'test@example.com',
        appareil: 'Pixel 7',
        version_android: 'Android 14',
        source: 'Site internet',
        plateformes: 'Smartphone, PC',
        profil_joueur: '3',
        texte_libre: 'Ceci est un test'
      })
    }
  };

  const result = doPost(testData);
  Logger.log(result.getContent());
}
