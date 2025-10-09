/**
 * Rehberlik Platform
 * Content management system for educational, social, and career guidance
 */

class RehberlikPlatform {
    constructor() {
        this.currentCategory = 'educational';
        this.currentFilter = 'videos';
        this.players = new Map(); // Store all video player instances
        
        // Content data - using dummy videos from the workspace
        this.content = {
            educational: {
                videos: [
                    {
                        id: 'edu-1',
                        type: 'video',
                        title: 'The Entire History of Africa',
                        description: 'Afrika\'nın tarihi hakkında detaylı bir belgesel.',
                        duration: '10:00',
                        thumbnail: 'thumbnails/made in history.png',
                        src: 'videos/The Entire History of Africa in Under 10 Minutes - Documentary.mp4',
                        category: 'educational',
                        isNew: true
                    },
                    {
                        id: 'edu-2',
                        type: 'video',
                        title: 'What Does Coffee Do To Your Body',
                        description: 'Kahvenin vücudunuz üzerindeki etkileri hakkında bilimsel açıklamalar.',
                        duration: '5:30',
                        thumbnail: 'thumbnails/coffee.png',
                        src: 'videos/What does coffee do to your body - BBC World Service.mp4',
                        category: 'educational'
                    },
                    {
                        id: 'edu-3',
                        type: 'video',
                        title: 'View From A Blue Moon',
                        description: 'Muhteşem doğa manzaraları ve surf deneyimi.',
                        duration: '3:45',
                        thumbnail: 'thumbnails/View_From_A_Blue_Moon_Trailer-HD.jpg',
                        src: 'videos/View_From_A_Blue_Moon_Trailer-1080p.mp4',
                        category: 'educational'
                    },
                    {
                        id: 'edu-4',
                        type: 'video',
                        title: 'A Day In The Life Of Serengeti Animals',
                        description: 'Serengeti hayvanlarının günlük yaşamı hakkında belgesel.',
                        duration: '8:20',
                        thumbnail: 'thumbnails/serengeti.png',
                        src: 'videos/A Day In The Life Of Serengeti Animals  Serengeti II  BBC Earth Kids.mp4',
                        category: 'educational'
                    }
                ],
                documents: [
                    {
                        id: 'edu-doc-1',
                        type: 'document',
                        title: 'Eğitim Teknikleri Rehberi',
                        description: 'Modern eğitim teknikleri ve stratejileri.',
                        category: 'educational',
                        thumbnail: 'images/1.jpg',
                        isNew: true
                    },
                    {
                        id: 'edu-doc-2',
                        type: 'document',
                        title: 'Akademik Başarı İpuçları',
                        description: 'Akademik başarıyı artırmak için öneriler.',
                        category: 'educational',
                        thumbnail: 'images/2.jpg'
                    }
                ]
            },
            social: {
                videos: [
                    {
                        id: 'soc-1',
                        type: 'video',
                        title: 'The Entire History of Africa',
                        description: 'Sosyal etkileşim ve tarih.',
                        duration: '10:00',
                        thumbnail: 'thumbnails/made in history.png',
                        src: 'videos/The Entire History of Africa in Under 10 Minutes - Documentary.mp4',
                        category: 'social'
                    },
                    {
                        id: 'soc-2',
                        type: 'video',
                        title: 'What Does Coffee Do To Your Body',
                        description: 'Sosyal içecekler ve sağlık.',
                        duration: '5:30',
                        thumbnail: 'thumbnails/coffee.png',
                        src: 'videos/What does coffee do to your body - BBC World Service.mp4',
                        category: 'social'
                    },
                    {
                        id: 'soc-3',
                        type: 'video',
                        title: 'View From A Blue Moon',
                        description: 'Doğa ve ruh sağlığı.',
                        duration: '3:45',
                        thumbnail: 'thumbnails/View_From_A_Blue_Moon_Trailer-HD.jpg',
                        src: 'videos/View_From_A_Blue_Moon_Trailer-1080p.mp4',
                        category: 'social'
                    },
                    {
                        id: 'soc-4',
                        type: 'video',
                        title: 'A Day In The Life Of Serengeti Animals',
                        description: 'Hayvanlar ve sosyal davranışlar.',
                        duration: '8:20',
                        thumbnail: 'thumbnails/serengeti.png',
                        src: 'videos/A Day In The Life Of Serengeti Animals  Serengeti II  BBC Earth Kids.mp4',
                        category: 'social'
                    }
                ],
                documents: [
                    {
                        id: 'soc-doc-1',
                        type: 'document',
                        title: 'Duygusal Zeka Rehberi',
                        description: 'Duygusal zekanızı geliştirme yolları.',
                        category: 'social',
                        thumbnail: 'images/3.jpg',
                    },
                    {
                        id: 'soc-doc-2',
                        type: 'document',
                        title: 'İletişim Becerileri',
                        description: 'Etkili iletişim teknikleri.',
                        category: 'social',
                        thumbnail: 'images/4.jpg',
                        isNew: true
                    }
                ]
            },
            career: {
                videos: [
                    {
                        id: 'car-1',
                        type: 'video',
                        title: 'The Entire History of Africa',
                        description: 'Tarih ve kariyer planlama.',
                        duration: '10:00',
                        thumbnail: 'thumbnails/made in history.png',
                        src: 'videos/The Entire History of Africa in Under 10 Minutes - Documentary.mp4',
                        category: 'career'
                    },
                    {
                        id: 'car-2',
                        type: 'video',
                        title: 'What Does Coffee Do To Your Body',
                        description: 'İş yerinde kahve kültürü.',
                        duration: '5:30',
                        thumbnail: 'thumbnails/coffee.png',
                        src: 'videos/What does coffee do to your body - BBC World Service.mp4',
                        category: 'career'
                    },
                    {
                        id: 'car-3',
                        type: 'video',
                        title: 'View From A Blue Moon',
                        description: 'Kariyer hedefleri ve motivasyon.',
                        duration: '3:45',
                        thumbnail: 'thumbnails/View_From_A_Blue_Moon_Trailer-HD.jpg',
                        src: 'videos/View_From_A_Blue_Moon_Trailer-1080p.mp4',
                        category: 'career'
                    },
                    {
                        id: 'car-4',
                        type: 'video',
                        title: 'A Day In The Life Of Serengeti Animals',
                        description: 'Doğadan kariyer dersleri.',
                        duration: '8:20',
                        thumbnail: 'thumbnails/serengeti.png',
                        src: 'videos/A Day In The Life Of Serengeti Animals  Serengeti II  BBC Earth Kids.mp4',
                        category: 'career'
                    }
                ],
                documents: [
                    {
                        id: 'car-doc-1',
                        type: 'document',
                        title: 'Kariyer Planlama Rehberi',
                        description: 'Başarılı bir kariyer için adımlar.',
                        category: 'career',
                        thumbnail: 'images/1.jpg'
                    },
                    {
                        id: 'car-doc-2',
                        type: 'document',
                        title: 'Mülakat Teknikleri',
                        description: 'Mülakatlarda başarılı olma yolları.',
                        category: 'career',
                        thumbnail: 'images/2.jpg'
                    }
                ]
            }
        };

        this.init();
    }

    init() {
        this.setupEventListeners();
        this.updateContentCounts();
        this.renderContent();
        
        // Set initial glider position
        const initialActiveButton = document.querySelector('.filter-btn.active');
        if (initialActiveButton) {
            const filterButtonsContainer = document.querySelector('.filter-buttons');
            const left = initialActiveButton.offsetLeft;
            const width = initialActiveButton.offsetWidth;
            filterButtonsContainer.style.setProperty('--glider-left', `${left}px`);
            filterButtonsContainer.style.setProperty('--glider-width', `${width}px`);
        }
        
        // Center the initial active category
        setTimeout(() => {
            const activeCategory = document.querySelector('.category-item.active');
            if (activeCategory) {
                this.centerSelectedCategory(activeCategory);
            }
        }, 100);
    }

    setupEventListeners() {
        // Category navigation
        document.querySelectorAll('.category-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const category = item.dataset.category;
                this.switchCategory(category);
            });
        });

        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.dataset.filter;
                this.switchFilter(filter);
            });
        });
    }

    switchCategory(category) {
        this.currentCategory = category;
        
        // Update active state
        document.querySelectorAll('.category-item').forEach(item => {
            item.classList.toggle('active', item.dataset.category === category);
        });

        // Center the selected category in the viewport
        const selectedCategory = document.querySelector(`[data-category="${category}"]`);
        if (selectedCategory) {
            this.centerSelectedCategory(selectedCategory);
        }

        this.renderContent();
    }

    /**
     * Center the selected category card in the viewport - ZindeKal style
     */
    centerSelectedCategory(categoryElement) {
        if (!categoryElement) {
            return;
        }

        const categoryNavScroll = document.querySelector('.category-nav-scroll');
        if (!categoryNavScroll) {
            return;
        }

        // Get the category element's position relative to the scroll container
        const categoryRect = categoryElement.getBoundingClientRect();
        const scrollRect = categoryNavScroll.getBoundingClientRect();
        
        // Calculate the category's position within the scroll container
        const categoryLeftRelativeToScroll = categoryRect.left - scrollRect.left;
        const categoryWidth = categoryRect.width;
        const scrollWidth = scrollRect.width;
        
        // Calculate the center position
        const targetScrollLeft = categoryNavScroll.scrollLeft + categoryLeftRelativeToScroll - (scrollWidth / 2) + (categoryWidth / 2);
        
        // Scroll to center the category
        categoryNavScroll.scrollTo({
            left: targetScrollLeft,
            behavior: 'smooth'
        });
    }

    switchFilter(filter) {
        this.currentFilter = filter;
        
        // Update active state and move glider
        const filterButtonsContainer = document.querySelector('.filter-buttons');
        const buttons = filterButtonsContainer.querySelectorAll('.filter-btn');
        let activeButton = null;

        buttons.forEach(btn => {
            const isActive = btn.dataset.filter === filter;
            btn.classList.toggle('active', isActive);
            if (isActive) {
                activeButton = btn;
            }
        });

        if (activeButton) {
            const left = activeButton.offsetLeft;
            const width = activeButton.offsetWidth;
            filterButtonsContainer.style.setProperty('--glider-left', `${left}px`);
            filterButtonsContainer.style.setProperty('--glider-width', `${width}px`);
        }

        this.renderContent();
    }

    updateContentCounts() {
        Object.keys(this.content).forEach(category => {
            const videos = this.content[category].videos?.length || 0;
            const documents = this.content[category].documents?.length || 0;
            const total = videos + documents;
            
            const countElement = document.querySelector(`[data-count="${category}"]`);
            if (countElement) {
                countElement.textContent = `${total} İçerik`;
            }
        });
    }

    renderContent() {
        const contentGrid = document.getElementById('content-grid');
        const documentGrid = document.getElementById('document-grid');
        const emptyState = document.getElementById('empty-state');
        
        if (!contentGrid || !documentGrid || !emptyState) return;

        const items = this.content[this.currentCategory][this.currentFilter] || [];

        if (items.length === 0) {
            contentGrid.style.display = 'none';
            documentGrid.style.display = 'none';
            emptyState.style.display = 'block';
            return;
        }

        emptyState.style.display = 'none';

        if (this.currentFilter === 'videos') {
            contentGrid.style.display = 'grid';
            documentGrid.style.display = 'none';
            contentGrid.innerHTML = items.map(video => this.createVideoCard(video)).join('');
            
            // Add click handlers to play buttons
            contentGrid.querySelectorAll('.play-button').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const videoSrc = btn.dataset.videoSrc;
                    const videoPoster = btn.dataset.videoPoster;
                    this.playVideo(videoSrc, videoPoster);
                });
            });

            // Add click handlers to video cards
            contentGrid.querySelectorAll('.video-card').forEach(card => {
                card.addEventListener('click', (e) => {
                    // Don't play video if clicking on info icon or tooltip
                    if (e.target.closest('.info-icon') || e.target.closest('.tooltip')) {
                        return;
                    }
                    
                    const playBtn = card.querySelector('.play-button');
                    if (playBtn) {
                        const videoSrc = playBtn.dataset.videoSrc;
                        const videoPoster = playBtn.dataset.videoPoster;
                        this.playVideo(videoSrc, videoPoster);
                    }
                });
            });

            // Setup tooltip handlers
            this.setupTooltips();
        } else {
            contentGrid.style.display = 'none';
            documentGrid.style.display = 'grid';
            documentGrid.innerHTML = items.map(doc => this.createDocumentCard(doc)).join('');
            
            // Add click handlers to document cards
            documentGrid.querySelectorAll('.document-card').forEach(card => {
                card.addEventListener('click', () => {
                    alert('Doküman görüntüleme özelliği yakında eklenecek!');
                });
            });

            // Setup tooltip handlers
            this.setupTooltips();
        }
    }

    createVideoCard(video) {
        return `
            <article class="video-card" data-video-id="${video.id}">
                ${video.isNew ? '<div class="new-badge">Yeni</div>' : ''}
                <figure class="video-thumbnail-container">
                    <img src="${video.thumbnail}" alt="${video.title}" class="video-thumbnail">
                    <div class="video-duration-badge">${video.duration}</div>
                    <button class="play-button" data-video-src="${video.src}" data-video-poster="${video.thumbnail}">
                        <img src="images/thumbnail-play.svg" 
                             alt="Play" 
                             style="position: absolute; top: 20.25px; left: 20.25px; width: 31.5px; height: 31.5px;">
                    </button>
                </figure>
                <div class="video-info">
                    <h3 class="video-title">${video.title}</h3>
                    <div class="info-icon">
                        <img src="images/info.svg" alt="Info Icon" />
                        <div class="tooltip">${video.description}</div>
                    </div>
                </div>
            </article>
        `;
    }

    createDocumentCard(doc) {
        return `
            <article class="document-card" data-document-id="${doc.id}">
                ${doc.isNew ? '<div class="new-badge">Yeni</div>' : ''}
                <div class="document-thumbnail-container">
                    <img src="${doc.thumbnail || 'images/document-placeholder.png'}" alt="${doc.title}" class="document-thumbnail">
                </div>
                <div class="document-info">
                    <div class="document-header">
                        <h3 class="document-title">${doc.title}</h3>
                        <div class="info-icon">
                            <img src="images/info.svg" alt="Info Icon" />
                            <div class="tooltip">${doc.description}</div>
                        </div>
                    </div>
                    <div class="document-actions">
                        <button class="view-btn" title="Görüntüle">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 5C7 5 2.73 8.11 1 12.5C2.73 16.89 7 20 12 20C17 20 21.27 16.89 23 12.5C21.27 8.11 17 5 12 5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z" fill="currentColor"/>
                            </svg>
                        </button>
                        <button class="download-btn" title="İndir">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 9H15V3H9V9H5L12 16L19 9ZM5 18V20H19V18H5Z" fill="currentColor"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </article>
        `;
    }

    /**
     * Setup tooltip functionality - Dijital Kopru style
     */
    setupTooltips() {
        const infoIcons = document.querySelectorAll('.info-icon');

        const closeAllTooltips = () => {
            document.querySelectorAll('.tooltip.open').forEach(t => {
                t.classList.remove('open');
            });
        };

        infoIcons.forEach(icon => {
            const tooltip = icon.querySelector('.tooltip');
            if (!tooltip) return;

            // Toggle tooltip when clicking the info icon
            icon.addEventListener('click', (e) => {
                e.stopPropagation();
                
                const isOpen = tooltip.classList.contains('open');
                closeAllTooltips();
                
                if (!isOpen) {
                    tooltip.classList.add('open');
                }
            });

            // Prevent clicks inside tooltip from closing it
            tooltip.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        });

        // Close tooltips when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.info-icon') && !e.target.closest('.tooltip')) {
                closeAllTooltips();
            }
        });

        // Close tooltips on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeAllTooltips();
            }
        });
    }

    /**
     * Play a video inline within the video card - ZindeKal style
     */
    playVideo(videoSrc, videoPoster = '') {
        // Pause all other playing videos first
        this.pauseAllOtherVideos();
        
        // Find the play button that was clicked
        const playButton = document.querySelector(`[data-video-src="${videoSrc}"]`);
        
        if (!playButton) {
            return;
        }

        const videoCard = playButton.closest('.video-card');
        const thumbnailContainer = videoCard.querySelector('.video-thumbnail-container');
        
        if (!thumbnailContainer) {
            return;
        }

        // Create unique ID for this video player
        const videoId = `inline-video-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        
        // Store original thumbnail content for potential restoration
        const originalContent = thumbnailContainer.innerHTML;
        
        // Replace thumbnail container content with video player
        thumbnailContainer.innerHTML = `
            <div class="inline-video-player" id="${videoId}">
                <video crossorigin class="inline-video" data-poster="${videoPoster}">
                    <source src="${videoSrc}" type="video/mp4">
                </video>
            </div>
        `;

        // Initialize inline video player
        const videoElement = thumbnailContainer.querySelector('.inline-video');
        const playerContainer = thumbnailContainer.querySelector('.inline-video-player');
        
        if (!videoElement) {
            thumbnailContainer.innerHTML = originalContent;
            return;
        }

        try {
            this.initializeVideoPlayer(videoElement, playerContainer, originalContent, videoSrc);
        } catch (error) {
            console.error('Error initializing video player:', error);
            thumbnailContainer.innerHTML = originalContent;
        }
    }

    /**
     * Initialize video player with Plyr
     */
    initializeVideoPlayer(videoElement, playerContainer, originalContent, videoSrc) {
        // Force layout refresh before initializing Plyr
        playerContainer.offsetHeight;
        
        // Initialize Plyr for this specific video
        const player = new Plyr(videoElement, this.getInlinePlayerConfig());
        
        // Store player reference on the container for cleanup
        playerContainer._plyrInstance = player;
        playerContainer._originalContent = originalContent;
        
        // Add loading state
        playerContainer.classList.add('plyr-loading');
        
        player.on('ready', () => {
            // Remove loading state and ensure visibility
            playerContainer.classList.remove('plyr-loading');
            playerContainer.style.visibility = 'visible';
            playerContainer.style.opacity = '1';
            
            // Force another layout refresh
            playerContainer.offsetHeight;
            
            // Auto-play the video
            player.play().catch(error => {
                // Silently handle auto-play failures
                console.log('Auto-play prevented:', error);
            });
        });

        // Add event listener for when video actually starts playing
        player.on('play', () => {
            // Pause all OTHER videos when this one starts playing
            this.pauseAllOtherVideos(playerContainer);
        });

        player.on('loadstart', () => {
            playerContainer.style.visibility = 'visible';
        });

        player.on('loadeddata', () => {
            playerContainer.style.opacity = '1';
        });

        player.on('error', (error) => {
            console.error('Video playback error:', error);
            this.restoreVideoThumbnail(playerContainer.closest('.video-thumbnail-container'));
        });

        // Set initial visibility
        setTimeout(() => {
            playerContainer.style.visibility = 'visible';
            playerContainer.style.opacity = '1';
            playerContainer.offsetHeight; // Force layout
        }, 100);
        
        // Store player instance
        this.players.set(videoSrc, player);
    }

    /**
     * Get Plyr configuration for inline video players
     */
    getInlinePlayerConfig() {
        return {
            clickToPlay: true,
            invertTime: false,
            playsinline: true,
            hideControls: false,
            controls: [
                'play-large', 'play', 'progress', 'current-time', 'duration', 
                'mute', 'volume', 'fullscreen'
            ],
            i18n: {
                restart: "Tekrar başlat",
                rewind: "{seektime}s geri",
                play: "Oynat",
                pause: "Duraklat",
                fastForward: "{seektime}s İleri",
                seek: "Git",
                seekLabel: "{currentTime}/{duration}",
                played: "Oynatılan",
                buffered: "Önbellek",
                currentTime: "Şimdiki zaman",
                duration: "Süre",
                volume: "Ses",
                mute: "Sessiz",
                unmute: "Ses aç",
                enableCaptions: "Altyazıları aç",
                disableCaptions: "Altyazıları kapat",
                download: "İndir",
                enterFullscreen: "Tam ekran",
                exitFullscreen: "Tam ekranı kapat",
                frameTitle: "Player for {title}",
                captions: "Altyazılar",
                settings: "Ayarlar",
                pip: "Resim içinde resim",
                menuBack: "Önceki menüye dön",
                speed: "Hız",
                normal: "Normal",
                quality: "Kalite",
                loop: "Döngü",
                start: "Başlangıç",
                end: "Son",
                all: "Tümü",
                reset: "Sıfırla",
                disabled: "Kapalı",
                enabled: "Açık",
            }
        };
    }

    /**
     * Pause all currently playing videos
     * @param {Element} excludeContainer - Optional container to exclude from pausing
     */
    pauseAllOtherVideos(excludeContainer = null) {
        const allVideoPlayers = document.querySelectorAll('.inline-video-player');
        
        allVideoPlayers.forEach(playerContainer => {
            // Skip the container we want to exclude (current playing video)
            if (excludeContainer && playerContainer === excludeContainer) {
                return;
            }
            
            if (playerContainer._plyrInstance) {
                try {
                    // Pause the video if it's playing
                    if (!playerContainer._plyrInstance.paused) {
                        playerContainer._plyrInstance.pause();
                    }
                } catch (error) {
                    // Silently handle pause errors
                    console.error('Error pausing video:', error);
                }
            }
        });
    }

    /**
     * Restore video thumbnail (optional method for future use)
     */
    restoreVideoThumbnail(thumbnailContainer) {
        const playerContainer = thumbnailContainer.querySelector('.inline-video-player');
        if (playerContainer && playerContainer._plyrInstance) {
            // Destroy Plyr instance
            playerContainer._plyrInstance.destroy();
            
            // Restore original content
            if (playerContainer._originalContent) {
                thumbnailContainer.innerHTML = playerContainer._originalContent;
            }
        }
    }
}

// Initialize the platform when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new RehberlikPlatform();
});
