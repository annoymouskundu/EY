
            // Get DOM elements
            const micButton = document.getElementById('start-recording');
            const speechDialog = document.getElementById('speech-dialog');
            const statusDiv = document.getElementById('status');
            const transcriptionDiv = document.getElementById('transcription');
    
            // Initialize SpeechRecognition API (Web Speech API)
            const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
            recognition.continuous = true;  // Keeps listening until stopped
            recognition.interimResults = true;  // Show partial results
    
            micButton.addEventListener('click', function () {
                // Show the dialog box
                speechDialog.style.display = 'block';
                statusDiv.textContent = 'Listening...';
    
                // Start speech recognition
                recognition.start();
            });
    
            recognition.onresult = function (event) {
                let transcript = '';
                for (let i = event.resultIndex; i < event.results.length; i++) {
                    transcript += event.results[i][0].transcript;
                }
    
                // Update the transcription text in the dialog box
                transcriptionDiv.textContent = transcript;
    
                // Optionally, handle final results
                if (event.results[0].isFinal) {
                    statusDiv.textContent = 'Done listening';
                }
            };
    
            recognition.onerror = function (event) {
                console.error('Error occurred in speech recognition: ', event.error);
                statusDiv.textContent = 'Error: ' + event.error;
            };
    
            // Close dialog when speech recognition ends
            recognition.onend = function () {
                speechDialog.style.display = 'none';
            };