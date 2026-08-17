// Google Apps Script — Template para recibir datos del formulario RSVP
//
// INSTRUCCIONES DE INSTALACIÓN:
// 1. Ve a https://script.google.com/
// 2. Crea un nuevo proyecto
// 3. Copia este código en editor
// 4. Haz clic en "Deploy" → "New deployment" → tipo "Web app"
// 5. Ejecuta como: Tu cuenta
// 6. Acceso: "Anyone"
// 7. Copia la URL de deployment (ejemplo: https://script.google.com/macros/s/AKfycby...)
// 8. Pégala en index.html línea 216, en la constante APPS_SCRIPT_URL
// 9. Descomenta el fetch() en assets/js/main.js línea ~300

function doPost(e) {
    try {
        const data = JSON.parse(e.postData.contents);

        // Aquí puedes hacer lo que necesites con los datos:
        // - Guardarlos en Google Sheets
        // - Enviar un email
        // - Guardarlos en Firestore
        // - Hacer llamadas a APIs externas

        Logger.log('RSVP recibido:', data);

        // Por ahora, solo retornar success
        return ContentService.createTextOutput(JSON.stringify({
            status: 'success',
            message: 'RSVP registrado correctamente',
            timestamp: new Date().toISOString()
        })).setMimeType(ContentService.MimeType.JSON);

    } catch (error) {
        Logger.log('Error:', error);
        return ContentService.createTextOutput(JSON.stringify({
            status: 'error',
            message: error.toString()
        })).setMimeType(ContentService.MimeType.JSON);
    }
}

// EJEMPLO: Guardar en Google Sheets
// (descomenta y configura si quieres guardar en una hoja)
/*
function saveToSheet(data) {
    const sheetId = "TU_GOOGLE_SHEET_ID";
    const spreadsheet = SpreadsheetApp.openById(sheetId);
    const sheet = spreadsheet.getSheetByName("RSVP");

    sheet.appendRow([
        data.timestamp,
        data.nombre,
        data.cupos,
        data.asistencia
    ]);
}
*/

// EJEMPLO: Enviar email de confirmación
// (descomenta y configura si quieres enviar emails)
/*
function sendConfirmationEmail(email, nombre) {
    const subject = "Confirmación recibida - Boda Diana & Oscar";
    const message = `Hola ${nombre},\n\nHemos recibido tu confirmación de asistencia.\n\n¡Nos vemos en la boda!\n\nDiana & Oscar`;

    GmailApp.sendEmail(email, subject, message);
}
*/
