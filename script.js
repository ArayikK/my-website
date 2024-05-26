window.onload = function() {
    document.getElementById('studentRegisterButton').addEventListener('click', function() {
        document.getElementById('registrationContainer').style.display = 'none';
        document.getElementById('studentRegistrationForm').style.display = 'block';
    });

    document.getElementById('mentorRegisterButton').addEventListener('click', function() {
        document.getElementById('registrationContainer').style.display = 'none';
        document.getElementById('mentorRegistrationForm').style.display = 'block';
    });

    document.getElementById('booksButton').addEventListener('click', function() {
        document.getElementById('mainContainer').style.display = 'none';
        document.getElementById('booksContainer').style.display = 'block';
    });

    document.getElementById('mentorButton').addEventListener('click', function() {
        document.getElementById('mainContainer').style.display = 'none';
        document.getElementById('mentorContainer').style.display = 'block';
    });

    document.getElementById('backButton').addEventListener('click', function() {
        document.getElementById('booksContainer').style.display = 'none';
        document.getElementById('mainContainer').style.display = 'block';
    });

    document.getElementById('backToMainButton').addEventListener('click', function() {
        document.getElementById('mentorContainer').style.display = 'none';
        document.getElementById('mainContainer').style.display = 'block';
    });

    document.getElementById('backToRegistrationButtonFromMentor').addEventListener('click', function() {
        document.getElementById('mentorRegistrationForm').style.display = 'none';
        document.getElementById('registrationContainer').style.display = 'block';
    });

    document.getElementById('backToRegistrationButtonFromStudent').addEventListener('click', function() {
        document.getElementById('studentRegistrationForm').style.display = 'none';
        document.getElementById('registrationContainer').style.display = 'block';
    });

    document.getElementById('studentForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('studentName').value;
        const surname = document.getElementById('studentSurname').value;
        const age = document.getElementById('studentAge').value;

        const personalId = `ID-${Math.floor(Math.random() * 1000000)}`;

        document.getElementById('userName').textContent = `${name} ${surname} (${personalId})`;
        document.getElementById('studentRegistrationForm').style.display = 'none';
        document.getElementById('mainContainer').style.display = 'block';
    });

    document.getElementById('mentorForm').addEventListener('submit', function(event) {
        event.preventDefault();
        // Handle mentor form submission here
    });

    // Dummy mentor data
    const mentors = [
        'Արմեն Ա.',
        'Աննա Բ.',
        'Գագիկ Գ.',
        'Դավիթ Դ.',
        'Էմմա Ե.'
    ];

    document.getElementById('mentorSearchBar').addEventListener('input', function() {
        const searchQuery = this.value.toLowerCase();
        const mentorList = document.getElementById('mentorList');
        mentorList.innerHTML = '';

        const filteredMentors = mentors.filter(mentor => mentor.toLowerCase().includes(searchQuery));
        filteredMentors.forEach(mentor => {
            const mentorDiv = document.createElement('div');
            mentorDiv.className = 'mentor';
            mentorDiv.textContent = mentor;
            mentorList.appendChild(mentorDiv);
        });
    });
};


let localStream;
let remoteStream;
let localVideo = document.getElementById('local-video');
let remoteVideo = document.getElementById('remote-video');

async function startChat() {
  try {
    localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    localVideo.srcObject = localStream;

    // Симуляция удалённого потока (в реальном приложении это приходило бы от другого пользователя)
    remoteStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    remoteVideo.srcObject = remoteStream;

    // В реальном приложении вы бы подключились к серверу сигнализации для установки прямого соединения
    // Для простоты мы просто симулируем это здесь
    console.log('Чат начат');
  } catch (error) {
    console.error('Ошибка при запуске чата:', error);
  }
}

function askQuestion() {

    let areaSelect = document.getElementById('area-select');
  let selectedArea = areaSelect.options[areaSelect.selectedIndex].value;

  let questionInput = document.getElementById('question-input');
  let question = questionInput.value.trim();
  
  if (question !== '') {
    let questionList = document.getElementById('question-list');
    let listItem = document.createElement('li');
    listItem.textContent = question;
    questionList.appendChild(listItem);
    questionInput.value = ''; // Очистить поле ввода
  }
}