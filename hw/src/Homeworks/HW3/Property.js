import './HW3.css'
import star from './star.png'

const styleGuestFavorite = {
    position: 'absolute',
    top: '10px',
    left: '10px',
    backgroundColor: 'white',
    color: 'black',
    padding: '0px 10px',
    borderRadius: '20px',
    fontSize: '0.7em',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    gap: '3px',
}

export default function Property() {
    return (
        <div className="card">
            <div className="card-image-container">
                <img
                    src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NDM1NzQzMzI%3D/original/231bdce1-e536-4eac-9bf4-afe4ae6f91d9.jpeg?im_w=720"
                    alt="property-img"
                    className="card-image"
                />
                <div style={styleGuestFavorite}>
                    <img
                        style={{ width: 22 }}
                        src="https://a0.muscache.com/pictures/airbnb-platform-assets/AirbnbPlatformAssets-email-dls-icons/original/c3c390ab-d1ab-4627-9cd7-608ac53b171e.png"
                        alt="trophy"
                    />{' '}
                    Guest favorite
                </div>
                <div className="heart-icon heart-svg-style ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                        role="presentation"
                        focusable="false"
                    >
                        <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"></path>
                    </svg>
                </div>

                <div className="dots">
                    <div className="dot active"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
            </div>
            <div className="card-info">
                <div className="location">Bled, Slovenia</div>
                <div className="distance">743 kilometers away</div>
                <div className="date">Aug 26 – 31</div>
                <div className="price">
                    $1,136 <span>for 5 nights</span>
                </div>
            </div>
            <div
                style={{
                    position: 'absolute',
                    bottom: '77px',
                    right: '15px',
                    fontSize: '0.8em',
                    color: 'black',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '3px',
                }}
            >
                <div>
                    <img
                        src={star}
                        alt="star"
                        style={{ width: '14px', height: '12px' }}
                    />
                </div>
                <span>4.99</span>
            </div>
        </div>
    )
}
