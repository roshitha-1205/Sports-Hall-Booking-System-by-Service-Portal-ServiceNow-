/* Sports Zone - Client Script */
api.controller = function() {
    var c = this;

    setTimeout(function() {
        initSportsZone();
    }, 100);

    function initSportsZone() {
        // DOM refs
        var sportRadios = document.querySelectorAll('input[name="sport"]');
        var sportItems = document.querySelectorAll('.sport-item');
        var displaySport = document.getElementById('displaySport');
        var displayVenue = document.getElementById('displayVenue');
        var displayDate = document.getElementById('displayDate');
        var displayAmount = document.getElementById('displayAmount');
        var statusBox = document.getElementById('statusBox');
        var statusText = document.getElementById('statusText');
        var emailBox = document.getElementById('emailBox');
        var proceedBtn = document.getElementById('proceedBtn');
        var payBtn = document.getElementById('payBtn');
        var exploreBtn = document.getElementById('exploreBtn');

        var bookVenueBtn = document.getElementById('bookVenueBtn');
        var myBookingsBtn = document.getElementById('myBookingsBtn');
        var helpBtn = document.getElementById('helpBtn');

        var bookingSection = document.getElementById('bookingSection');
        var heroSection = document.getElementById('heroSection');
        var flowBar = document.getElementById('flowBar');
        var bookingsList = document.getElementById('bookingsList');
        var helpSection = document.getElementById('helpSection');
        var exploreSection = document.getElementById('exploreSection');
        var exploreGrid = document.getElementById('exploreGrid');
        var backFromExploreBtn = document.getElementById('backFromExploreBtn');
        var bookingsContainer = document.getElementById('bookingsContainer');
        var bookingCount = document.getElementById('bookingCount');

        var dots = {
            1: document.getElementById('dot1'),
            2: document.getElementById('dot2'),
            3: document.getElementById('dot3'),
            4: document.getElementById('dot4')
        };
        var labels = {
            1: document.getElementById('label1'),
            2: document.getElementById('label2'),
            3: document.getElementById('label3'),
            4: document.getElementById('label4')
        };
        var lines = {
            1: document.getElementById('line1'),
            2: document.getElementById('line2'),
            3: document.getElementById('line3')
        };

        // Data
        var prices = {
            Badminton: 24.00,
            Tennis: 32.00,
            Cricket: 45.00,
            Football: 38.00,
            Basketball: 28.00,
            Swimming: 20.00
        };

        var venues = {
            Badminton: 'Indoor Badminton Court 🏸',
            Tennis: 'Tennis Club Center 🎾',
            Cricket: 'Oval Cricket Ground 🏏',
            Football: 'Football Field ⚽',
            Basketball: 'Basketball Arena 🏀',
            Swimming: 'Swimming Pool 🏊'
        };

        var emojis = {
            Badminton: '🏸',
            Tennis: '🎾',
            Cricket: '🏏',
            Football: '⚽',
            Basketball: '🏀',
            Swimming: '🏊'
        };

        var allVenues = [
            { name: 'Basketball Arena', icon: '🏀', price: '$28/hr' },
            { name: 'Football Field', icon: '⚽', price: '$38/hr' },
            { name: 'Badminton Court', icon: '🏸', price: '$24/hr' },
            { name: 'Tennis Club', icon: '🎾', price: '$32/hr' },
            { name: 'Cricket Ground', icon: '🏏', price: '$45/hr' },
            { name: 'Swimming Pool', icon: '🏊', price: '$20/hr' },
            { name: 'Cycling Track', icon: '🚴', price: '$18/hr' },
            { name: 'Boxing Ring', icon: '🥊', price: '$22/hr' }
        ];

        var selectedSport = 'Badminton';
        var currentStep = 1;
        var isProcessing = false;
        var bookings = [];
        var bookingIdCounter = 1;

        function updateFlow(step) {
            currentStep = step;
            for (var i = 1; i <= 4; i++) {
                var dot = dots[i];
                var label = labels[i];
                dot.className = 'dot';
                label.className = 'step-label';
                if (i < step) {
                    dot.classList.add('completed');
                    label.classList.add('completed-label');
                } else if (i === step) {
                    dot.classList.add('active');
                    label.classList.add('active-label');
                }
            }
            for (var j = 1; j <= 3; j++) {
                var line = lines[j];
                line.className = 'flow-line';
                if (j < step) {
                    line.classList.add('completed');
                } else if (j === step) {
                    line.classList.add('active');
                }
            }
            if (payBtn) payBtn.disabled = (step === 4);
        }

        function updateSportUI() {
            if (displaySport) displaySport.textContent = selectedSport + ' ' + (emojis[selectedSport] || '');
            if (displayVenue) displayVenue.textContent = venues[selectedSport] || 'Sports Venue';
            var price = prices[selectedSport] || 24.00;
            if (displayAmount) displayAmount.textContent = '$' + price.toFixed(2);
        }

        function updateSportItems() {
            sportItems.forEach(function(item) {
                var radio = item.querySelector('input[type="radio"]');
                if (radio && radio.checked) {
                    item.classList.add('selected');
                } else {
                    item.classList.remove('selected');
                }
            });
        }

        function resetAll() {
            if (isProcessing) return;
            updateFlow(1);
            if (statusBox) {
                statusBox.className = 'status-box';
                statusBox.querySelector('i').className = 'fas fa-clock';
            }
            if (statusText) statusText.textContent = 'Select a sport to begin';
            if (emailBox) emailBox.style.display = 'none';
            if (payBtn) payBtn.disabled = false;
            if (proceedBtn) proceedBtn.disabled = false;
            updateSportUI();
            updateSportItems();
        }

        function showBookingSection() {
            var navSpans = document.querySelectorAll('.nav-menu span');
            for (var i = 0; i < navSpans.length; i++) {
                navSpans[i].classList.remove('active');
            }
            if (bookVenueBtn) bookVenueBtn.classList.add('active');
            if (bookingSection) bookingSection.style.display = 'grid';
            if (heroSection) heroSection.style.display = 'flex';
            if (flowBar) flowBar.style.display = 'flex';
            if (bookingsList) bookingsList.classList.remove('active');
            if (helpSection) helpSection.classList.remove('active');
            if (exploreSection) exploreSection.classList.remove('active');
        }

        function renderBookings() {
            if (!bookings || bookings.length === 0) {
                if (bookingsContainer) {
                    bookingsContainer.innerHTML =
                        '<div class="no-bookings"><i class="fas fa-calendar-plus"></i><p>No bookings yet. Book your first venue now!</p></div>';
                }
                if (bookingCount) bookingCount.textContent = '';
                return;
            }

            var html = '';
            for (var i = 0; i < bookings.length; i++) {
                var b = bookings[i];
                var icon = b.icon || '🏸';
                var sportName = b.sport || 'Unknown Sport';
                var venueName = b.venue || 'Unknown Venue';
                var dateTime = b.date || 'Today, 6:00 PM';
                var amount = b.amount || 0;
                var amountStr = '$' + amount.toFixed(2);

                html += '<div class="booking-item">';
                html += '  <div class="booking-icon">' + icon + '</div>';
                html += '  <div class="booking-info">';
                html += '    <div class="title">' + sportName + '</div>';
                html += '    <div class="details">' + venueName + ' · ' + dateTime + ' · ' + amountStr + '</div>';
                html += '  </div>';
                html += '  <span class="booking-status"><i class="fas fa-check-circle"></i> Confirmed</span>';
                html += '</div>';
            }
            if (bookingsContainer) bookingsContainer.innerHTML = html;

            var count = bookings.length;
            if (bookingCount) bookingCount.textContent = '(' + count + ' booking' + (count > 1 ? 's' : '') + ')';
        }

        function showMyBookings() {
            var navSpans = document.querySelectorAll('.nav-menu span');
            for (var i = 0; i < navSpans.length; i++) {
                navSpans[i].classList.remove('active');
            }
            if (myBookingsBtn) myBookingsBtn.classList.add('active');
            if (bookingSection) bookingSection.style.display = 'none';
            if (heroSection) heroSection.style.display = 'none';
            if (flowBar) flowBar.style.display = 'none';
            if (bookingsList) bookingsList.classList.add('active');
            if (helpSection) helpSection.classList.remove('active');
            if (exploreSection) exploreSection.classList.remove('active');
            renderBookings();
        }

        function showHelp() {
            var navSpans = document.querySelectorAll('.nav-menu span');
            for (var i = 0; i < navSpans.length; i++) {
                navSpans[i].classList.remove('active');
            }
            if (helpBtn) helpBtn.classList.add('active');
            if (bookingSection) bookingSection.style.display = 'none';
            if (heroSection) heroSection.style.display = 'none';
            if (flowBar) flowBar.style.display = 'none';
            if (bookingsList) bookingsList.classList.remove('active');
            if (helpSection) helpSection.classList.add('active');
            if (exploreSection) exploreSection.classList.remove('active');
        }

        function showExplore() {
            var navSpans = document.querySelectorAll('.nav-menu span');
            for (var i = 0; i < navSpans.length; i++) {
                navSpans[i].classList.remove('active');
            }
            if (bookingSection) bookingSection.style.display = 'none';
            if (heroSection) heroSection.style.display = 'none';
            if (flowBar) flowBar.style.display = 'none';
            if (bookingsList) bookingsList.classList.remove('active');
            if (helpSection) helpSection.classList.remove('active');
            if (exploreSection) exploreSection.classList.add('active');
            renderExploreVenues();
        }

        function renderExploreVenues() {
            var html = '';
            for (var i = 0; i < allVenues.length; i++) {
                var v = allVenues[i];
                html += '<div class="explore-item">';
                html += '  <div class="explore-icon">' + v.icon + '</div>';
                html += '  <div class="explore-info">';
                html += '    <div class="explore-name">' + v.name + '</div>';
                html += '    <div class="explore-price">' + v.price + '</div>';
                html += '  </div>';
                html += '  <button class="explore-book-btn" data-venue="' + v.name + '" data-price="' + v.price +
                    '">Book Now</button>';
                html += '</div>';
            }
            if (exploreGrid) exploreGrid.innerHTML = html;

            var bookBtns = exploreGrid.querySelectorAll('.explore-book-btn');
            bookBtns.forEach(function(btn) {
                btn.addEventListener('click', function() {
                    var venueName = this.getAttribute('data-venue');
                    var sportMap = {
                        'Basketball Arena': 'Basketball',
                        'Football Field': 'Football',
                        'Badminton Court': 'Badminton',
                        'Tennis Club': 'Tennis',
                        'Cricket Ground': 'Cricket',
                        'Swimming Pool': 'Swimming'
                    };
                    var sport = sportMap[venueName] || 'Badminton';
                    sportRadios.forEach(function(radio) {
                        if (radio.value === sport) {
                            radio.checked = true;
                            radio.dispatchEvent(new Event('change'));
                        }
                    });
                    showBookingSection();
                    setTimeout(function() {
                        handleProceed();
                    }, 300);
                });
            });
        }

        function addBooking(sport, venue, date, amount) {
            var booking = {
                id: bookingIdCounter++,
                sport: sport,
                icon: emojis[sport] || '🏸',
                venue: venue,
                date: date,
                amount: amount
            };
            bookings.push(booking);
            try {
                localStorage.setItem('sportsBookings', JSON.stringify(bookings));
            } catch (e) {}
            renderBookings();
        }

        function loadBookings() {
            try {
                var saved = localStorage.getItem('sportsBookings');
                if (saved) {
                    var parsed = JSON.parse(saved);
                    if (Array.isArray(parsed) && parsed.length > 0) {
                        bookings = parsed;
                        bookingIdCounter = bookings.length + 1;
                    }
                }
            } catch (e) {}
        }

        function handleProceed() {
            if (isProcessing) return;
            sportRadios.forEach(function(radio) {
                if (radio.checked) {
                    selectedSport = radio.value;
                }
            });
            updateSportUI();
            updateSportItems();
            updateFlow(2);
            if (statusBox) {
                statusBox.className = 'status-box';
                statusBox.querySelector('i').className = 'fas fa-arrow-right';
            }
            if (statusText) statusText.textContent = '🎯 ' + selectedSport + ' — ready for payment';
            if (emailBox) emailBox.style.display = 'none';
            if (payBtn) payBtn.disabled = false;
            if (proceedBtn) {
                proceedBtn.style.transform = 'scale(0.96)';
                setTimeout(function() {
                    proceedBtn.style.transform = '';
                }, 150);
            }
        }

        function handlePayment() {
            if (isProcessing) return;
            if (currentStep === 4) {
                resetAll();
                return;
            }
            sportRadios.forEach(function(radio) {
                if (radio.checked) {
                    selectedSport = radio.value;
                }
            });
            updateSportUI();
            updateFlow(3);
            isProcessing = true;
            if (payBtn) payBtn.disabled = true;
            if (statusBox) {
                statusBox.className = 'status-box processing';
                statusBox.querySelector('i').className = 'fas fa-spinner fa-spin';
            }
            if (statusText) statusText.textContent = '⏳ Processing payment...';

            setTimeout(function() {
                updateFlow(4);
                isProcessing = false;
                var currentDate = displayDate ? displayDate.textContent : 'Today, 6:00 PM';
                var currentAmount = prices[selectedSport] || 24.00;
                addBooking(selectedSport, venues[selectedSport], currentDate, currentAmount);
                if (statusBox) {
                    statusBox.className = 'status-box success';
                    statusBox.querySelector('i').className = 'fas fa-check-circle';
                }
                if (statusText) statusText.textContent = '✅ ' + selectedSport + ' booked successfully!';
                if (emailBox) {
                    emailBox.style.display = 'flex';
                    var venueName = venues[selectedSport] || 'Sports Venue';
                    emailBox.querySelector('span').innerHTML =
                        '<strong>✓ Confirmation email</strong> sent with venue details (' + venueName + ')';
                }
                if (payBtn) payBtn.disabled = true;
            }, 1800);
        }

        // Event listeners
        sportRadios.forEach(function(radio) {
            radio.addEventListener('change', function() {
                if (this.checked && !isProcessing) {
                    selectedSport = this.value;
                    updateSportUI();
                    updateSportItems();
                    if (currentStep === 4) {
                        resetAll();
                    } else if (currentStep >= 2) {
                        updateFlow(1);
                        if (statusBox) {
                            statusBox.className = 'status-box';
                            statusBox.querySelector('i').className = 'fas fa-clock';
                        }
                        if (statusText) statusText.textContent = 'Selected: ' + selectedSport;
                        if (emailBox) emailBox.style.display = 'none';
                        if (payBtn) payBtn.disabled = false;
                    } else {
                        if (statusBox) {
                            statusBox.className = 'status-box';
                            statusBox.querySelector('i').className = 'fas fa-clock';
                        }
                        if (statusText) statusText.textContent = 'Selected: ' + selectedSport;
                        if (emailBox) emailBox.style.display = 'none';
                    }
                }
            });
        });

        sportItems.forEach(function(item) {
            item.addEventListener('click', function() {
                var radio = this.querySelector('input[type="radio"]');
                if (radio) {
                    radio.checked = true;
                    radio.dispatchEvent(new Event('change'));
                }
            });
        });

        if (bookVenueBtn) bookVenueBtn.addEventListener('click', showBookingSection);
        if (myBookingsBtn) myBookingsBtn.addEventListener('click', showMyBookings);
        if (helpBtn) helpBtn.addEventListener('click', showHelp);
        if (exploreBtn) exploreBtn.addEventListener('click', showExplore);
        if (backFromExploreBtn) backFromExploreBtn.addEventListener('click', showBookingSection);

        if (payBtn) payBtn.addEventListener('click', handlePayment);
        if (proceedBtn) proceedBtn.addEventListener('click', handleProceed);

        // Init
        loadBookings();
        resetAll();
        if (emailBox) emailBox.style.display = 'none';
        updateSportItems();
        showBookingSection();
        renderBookings();
        renderExploreVenues();

        // Date rotation
        var dates = ['Today, 6:00 PM', 'Today, 8:00 PM', 'Tomorrow, 4:00 PM', 'Tomorrow, 7:00 PM', 'Fri, 10:00 AM',
            'Sat, 2:00 PM'
        ];
        var dateIndex = 0;
        setInterval(function() {
            dateIndex = (dateIndex + 1) % dates.length;
            if (displayDate) displayDate.textContent = dates[dateIndex];
        }, 5000);
    }
};