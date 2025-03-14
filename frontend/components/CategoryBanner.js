import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

const BannerContainer = styled.div`
  margin-bottom: 4rem;
`;

const BannerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  height: 400px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BannerItem = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;

  &:hover .overlay {
    background: rgba(0,0,0,0.3);
  }
`;

const BannerContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  z-index: 2;
`;

const BannerTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  font-family: 'Playfair Display', serif;
`;

const BannerButton = styled.button`
  padding: 0.75rem 2rem;
  background: white;
  color: #333;
  border: none;
  border-radius: 25px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: #b8860b;
    color: white;
  }
`;

const banners = [
  {
    id: 1,
    title: "New Arrivals",
    image: "https://images.pexels.com/photos/2683270/pexels-photo-2683270.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "/new-arrivals"
  },
  {
    id: 2,
    title: "Best Sellers",
    image: "https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "/best-sellers"
  }
];

export default function CategoryBanner() {
  return (
    <BannerContainer>
      <BannerGrid>
        {banners.map((banner) => (
          <Link href={banner.link} key={banner.id}>
            <BannerItem>
              <Image
                src={banner.image}
                alt={banner.title}
                layout="fill"
                objectFit="cover"
                priority
              />
              <div className="overlay" style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0,0,0,0.4)',
                transition: 'all 0.3s ease'
              }} />
              <BannerContent>
                <BannerTitle>{banner.title}</BannerTitle>
                <BannerButton>Shop Now</BannerButton>
              </BannerContent>
            </BannerItem>
          </Link>
        ))}
      </BannerGrid>
    </BannerContainer>
  );
} 