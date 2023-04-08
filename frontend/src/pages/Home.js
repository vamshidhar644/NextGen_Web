import React from 'react'
import Banner from '../Components/Banner'

const Home = () => {
  const { user } = useAuthContext();
  const { banners, bannerdispatch } = useBannerContext();

  const [bannerData, setBannerData] = useState([]);

  const [imgSrc, setImageSrc] = useState();
  useEffect(() => {
    const fetchBanners = async () => {
      const response = await fetch('/api/banner');
      const json = await response.json();

      if (response.ok) {
        bannerdispatch({ type: 'SET_BANNERS', payload: json });
      }
    };

    fetchBanners();
  }, [bannerdispatch, user, banners, bannerData, imgSrc]);

  return (
    <div>
      <Banner/>
    </div>
  )
}
