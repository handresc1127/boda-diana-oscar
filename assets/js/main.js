// ============================================
// INICIALIZACIÓN Y VINCULACIÓN DE DATOS
// ============================================

// Función para formatear la fecha de manera legible
function formatDateSpanish(dateString) {
    const [date, time] = dateString.split(' ');
    const [year, month, day] = date.split('-');

    const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
                   'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

    return `${parseInt(day)} de ${months[parseInt(month) - 1]} de ${year}`;
}

// Inicializar datos en la página
function initializeWeddingData() {
    const data = window.WEDDING_DATA;

    // Actualizar título de hero
    const heroTitle = document.getElementById('heroTitle');
    heroTitle.textContent = `${data.brideName} & ${data.groomName}`;

    // Actualizar detalles de ceremonia
    document.getElementById('ceremonyTimeDisplay').textContent = data.ceremonyTime;
    document.getElementById('ceremonyLocationDisplay').innerHTML =
        `${data.ceremonyLocation}<br>${data.ceremonyCity}`;
    document.getElementById('ceremonyMapLink').href = data.ceremonyMapUrl;

    // Actualizar detalles de recepción
    document.getElementById('receptionTimeDisplay').textContent = data.receptionTime;
    document.getElementById('receptionLocationDisplay').innerHTML =
        `${data.receptionLocation}<br>${data.receptionCity}`;
    document.getElementById('receptionMapLink').href = data.receptionMapUrl;

    // Actualizar código de vestimenta
    document.getElementById('dresscodeForWomen').textContent =
        `${data.dressCodeDescription} (Mujeres)`;
    document.getElementById('dresscodeForMen').textContent =
        `${data.dressCodeDescription} (Hombres)`;

    // Actualizar formularios
    document.getElementById('rsvpFormLink').href = data.rsvpFormUrl;
    document.getElementById('musicFormLink').href = data.musicFormUrl;
    document.getElementById('suggestionsFormLink').href = data.suggestionsFormUrl;

    // Actualizar hashtag
    document.getElementById('hashtagDisplay').textContent = data.weddingHashtag;
    document.getElementById('instagramLink').href =
        `https://www.instagram.com/explore/tags/${data.instagramHashtag}/`;

    // Actualizar fecha límite de RSVP
    document.getElementById('rsvpDeadlineDisplay').textContent = data.rsvpDeadline;

    // Generar hoteles
    generateHotels(data.hotels);

    // Inicializar cuenta regresiva
    initializeCountdown(data.ceremonyDateTime);
}

// ============================================
// CUENTA REGRESIVA
// ============================================

function initializeCountdown(ceremonyDateTime) {
    function updateCountdown() {
        const now = new Date().getTime();
        const ceremonyDate = new Date(ceremonyDateTime).getTime();
        const distance = ceremonyDate - now;

        if (distance < 0) {
            document.getElementById('countdownDays').textContent = '0';
            document.getElementById('countdownHours').textContent = '0';
            document.getElementById('countdownMinutes').textContent = '0';
            document.getElementById('countdownSeconds').textContent = '0';
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('countdownDays').textContent = String(days).padStart(2, '0');
        document.getElementById('countdownHours').textContent = String(hours).padStart(2, '0');
        document.getElementById('countdownMinutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('countdownSeconds').textContent = String(seconds).padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// ============================================
// SOBRE ANIMADO (ENVELOPE)
// ============================================

function initializeEnvelope() {
    const envelopeBtn = document.getElementById('envelopeBtn');
    const slideshow = document.getElementById('openingSlideshow');
    const slides = slideshow.querySelectorAll('img');
    const SLIDE_DURATION = 1300; // ms por foto

    envelopeBtn.addEventListener('click', function() {
        envelopeBtn.style.transform = 'rotateX(180deg)';
        envelopeBtn.innerHTML = '<span class="envelope-icon">💌</span><span>Invitación abierta</span>';

        slideshow.classList.add('is-active');
        slides[0].classList.add('is-shown');

        let index = 0;
        const interval = setInterval(function() {
            slides[index].classList.remove('is-shown');
            index = (index + 1) % slides.length;
            slides[index].classList.add('is-shown');
        }, SLIDE_DURATION);

        setTimeout(function() {
            clearInterval(interval);
            slideshow.classList.remove('is-active');
            document.documentElement.classList.add('invitation-opened');
        }, SLIDE_DURATION * slides.length);
    }, { once: true });
}

// ============================================
// GALERÍA CON LIGHTBOX
// ============================================

function initializeGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            openLightbox(this.dataset.fullImg);
        });
    });
}

function openLightbox(imageName) {
    // Crear modal
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
        animation: fadeInUp 0.3s ease-in-out;
    `;

    const content = document.createElement('div');
    content.style.cssText = `
        position: relative;
        max-width: 90vw;
        max-height: 90vh;
        display: flex;
        align-items: center;
        justify-content: center;
    `;

    const img = document.createElement('div');
    img.style.cssText = `
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-secondary) 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--color-primary);
        font-size: 1.2rem;
        border-radius: 10px;
        padding: 2rem;
        text-align: center;
    `;
    img.textContent = `Galería: ${imageName} (Foto real aquí)`;

    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '✕';
    closeBtn.style.cssText = `
        position: absolute;
        top: 20px;
        right: 20px;
        background: var(--color-white);
        border: none;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        font-size: 1.5rem;
        cursor: pointer;
        z-index: 2001;
    `;

    closeBtn.addEventListener('click', () => modal.remove());
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });

    content.appendChild(img);
    content.appendChild(closeBtn);
    modal.appendChild(content);
    document.body.appendChild(modal);
}

// ============================================
// MODAL FORMULARIO RSVP
// ============================================

// URL del Google Apps Script (vacía por ahora, se completa cuando esté lista)
// Reemplaza con tu URL de deployment: https://script.google.com/macros/s/AKfycby...
const APPS_SCRIPT_URL = '';

function openRsvpModal() {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
        animation: fadeInUp 0.3s ease-in-out;
    `;

    const content = document.createElement('div');
    content.style.cssText = `
        position: relative;
        background: var(--color-white);
        border-radius: 10px;
        padding: 2rem;
        max-width: 400px;
        width: 90%;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
    `;

    content.innerHTML = `
        <h3 style="margin-top: 0; color: var(--color-primary); font-family: 'Playfair Display', serif; font-size: 1.5rem;">
            Confirmar Asistencia
        </h3>
        <form id="rsvpFormElement" style="display: flex; flex-direction: column; gap: 1rem;">
            <div>
                <label style="display: block; margin-bottom: 0.5rem; color: var(--color-text); font-weight: 500;">
                    Nombre Completo
                </label>
                <input type="text" name="nombre" required style="width: 100%; padding: 0.75rem; border: 1px solid var(--color-border); border-radius: 5px; font-size: 1rem; font-family: inherit;" placeholder="Tu nombre">
            </div>
            <div>
                <label style="display: block; margin-bottom: 0.5rem; color: var(--color-text); font-weight: 500;">
                    Cantidad de Personas
                </label>
                <select name="cupos" required style="width: 100%; padding: 0.75rem; border: 1px solid var(--color-border); border-radius: 5px; font-size: 1rem; font-family: inherit;">
                    <option value="">Selecciona...</option>
                    <option value="1">1 persona</option>
                    <option value="2">2 personas</option>
                    <option value="3">3 personas</option>
                    <option value="4">4 personas</option>
                    <option value="5">5+ personas</option>
                </select>
            </div>
            <div>
                <label style="display: block; margin-bottom: 0.5rem; color: var(--color-text); font-weight: 500;">
                    ¿Asistirás?
                </label>
                <div style="display: flex; gap: 1rem;">
                    <label style="display: flex; align-items: center; cursor: pointer;">
                        <input type="radio" name="asistencia" value="si" required style="margin-right: 0.5rem;">
                        Sí, confirmo
                    </label>
                    <label style="display: flex; align-items: center; cursor: pointer;">
                        <input type="radio" name="asistencia" value="no" style="margin-right: 0.5rem;">
                        No puedo asistir
                    </label>
                </div>
            </div>
            <button type="submit" style="background: var(--color-primary); color: white; border: none; padding: 0.75rem 1.5rem; border-radius: 5px; font-size: 1rem; cursor: pointer; font-weight: 500; transition: opacity 0.3s;">
                Enviar Confirmación
            </button>
        </form>
    `;

    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '✕';
    closeBtn.style.cssText = `
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: transparent;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        color: var(--color-text);
    `;

    closeBtn.addEventListener('click', () => modal.remove());
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });

    const form = content.querySelector('#rsvpFormElement');
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = {
            nombre: form.querySelector('input[name="nombre"]').value,
            cupos: form.querySelector('select[name="cupos"]').value,
            asistencia: form.querySelector('input[name="asistencia"]:checked').value,
            timestamp: new Date().toISOString()
        };

        console.log('📤 Datos de RSVP listos (POST NO ENVIADO AÚN):', formData);
        // TODO: Descomentar cuando Apps Script esté listo
        // fetch(APPS_SCRIPT_URL, {
        //     method: 'POST',
        //     mode: 'no-cors',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(formData)
        // });

        modal.remove();
        alert('¡Gracias por confirmar! Tu respuesta ha sido registrada.');
    });

    content.appendChild(closeBtn);
    modal.appendChild(content);
    document.body.appendChild(modal);
}

// ============================================
// HOTELES
// ============================================

function generateHotels(hotels) {
    const hotelsGrid = document.getElementById('hotelsGrid');
    hotelsGrid.innerHTML = '';

    hotels.forEach(hotel => {
        const card = document.createElement('div');
        card.className = 'hotel-card';
        card.innerHTML = `
            <h4>🏨 ${hotel.name}</h4>
            <p class="hotel-city">${hotel.city}</p>
            <a href="${hotel.website}" target="_blank" class="hotel-link">Ver disponibilidad →</a>
        `;
        hotelsGrid.appendChild(card);
    });
}

// ============================================
// BOTÓN "AGREGAR AL CALENDARIO"
// ============================================

function initializeAddToCalendar() {
    const addToCalendarBtn = document.getElementById('addToCalendarBtn');

    addToCalendarBtn.addEventListener('click', function() {
        const data = window.WEDDING_DATA;
        const [date, time] = data.ceremonyDateTime.split(' ');
        const [hour, minute] = time.split(':');

        // Crear una URL de Google Calendar
        const startDate = date.replace(/-/g, '') + 'T' + hour + minute + '00Z';
        const endDate = date.replace(/-/g, '') + 'T' + String(parseInt(hour) + 4).padStart(2, '0') + minute + '00Z';

        const title = `Boda de ${data.brideName} & ${data.groomName}`;
        const location = data.ceremonyLocation + ', ' + data.ceremonyCity;
        const description = `Celebración de la boda de ${data.brideName} y ${data.groomName}. Ceremonia a las ${data.ceremonyTime}.`;

        const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startDate}/${endDate}&location=${encodeURIComponent(location)}&details=${encodeURIComponent(description)}`;

        window.open(googleCalendarUrl, '_blank');
    });
}

// ============================================
// SCROLL ANIMATIONS (Fade in en scroll)
// ============================================

function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.animation = 'fadeInUp 0.6s ease-in-out';
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// ============================================
// NAVEGACIÓN MÓVIL (Smooth scroll)
// ============================================

function initializeNavigation() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ============================================
// INICIALIZACIÓN PRINCIPAL
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    initializeEnvelope();
    initializeWeddingData();

    // Interceptar clic del botón RSVP y mostrar modal en lugar de Google Forms
    const rsvpFormLink = document.getElementById('rsvpFormLink');
    if (rsvpFormLink) {
        rsvpFormLink.addEventListener('click', function(e) {
            e.preventDefault();
            openRsvpModal();
        });
        // No establecer href a Google Forms, ya que ahora usamos modal
    }

    initializeGallery();
    initializeAddToCalendar();
    initializeScrollAnimations();
    initializeNavigation();

    // Log para debugging
    console.log('✨ Página de invitación cargada correctamente');
});
