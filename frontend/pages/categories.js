import Layout from '../components/Layout';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import CategoryBanner from '../components/CategoryBanner';

const PageContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
  font-family: 'Playfair Display', serif;
`;

const Subtitle = styled.p`
  color: #666;
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const CategoryCard = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  height: 400px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0,0,0,0.15);

    .overlay {
      background: rgba(0,0,0,0.3);
    }

    .content {
      transform: translateY(-5px);
    }

    .arrow {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const CategoryImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.4);
  transition: all 0.3s ease;
`;

const CategoryContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  color: white;
  transition: all 0.3s ease;
`;

const CategoryTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  font-family: 'Playfair Display', serif;
`;

const CategoryDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
  opacity: 0.9;
`;

const ArrowIcon = styled.span`
  display: inline-flex;
  align-items: center;
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.3s ease;
`;

const categories = [
  {
    id: 1,
    name: "Makeup",
    description: "Discover our premium collection of foundations, lipsticks, and more",
    image: "https://images.pexels.com/photos/2688992/pexels-photo-2688992.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "/makeup",
    itemCount: 150
  },
  {
    id: 2,
    name: "Skincare",
    description: "Nourish your skin with our selection of serums and moisturizers",
    image: "https://images.pexels.com/photos/3785170/pexels-photo-3785170.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "/skincare",
    itemCount: 120
  },
  {
    id: 3,
    name: "Haircare",
    description: "Transform your hair with professional hair care products",
    image: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "/haircare",
    itemCount: 80
  },
  {
    id: 4,
    name: "Fragrances",
    description: "Explore our collection of luxury perfumes and fragrances",
    image: "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "/fragrances",
    itemCount: 90
  },
  {
    id: 5,
    name: "Tools & Brushes",
    description: "Professional beauty tools for flawless application",
    image: "https://images.pexels.com/photos/457701/pexels-photo-457701.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "/tools",
    itemCount: 60
  },
  {
    id: 6,
    name: "Bath & Body",
    description: "Luxurious bath and body care products for ultimate relaxation",
    image: "https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "/bath-body",
    itemCount: 70
  }
];

export default function Categories() {
  return (
    <Layout>
      <PageContainer>
        <Header>
          <Title>Shop by Category</Title>
          <Subtitle>
            Explore our wide range of beauty and skincare products across different categories
          </Subtitle>
        </Header>

        <CategoryBanner />

        <CategoryGrid>
          {categories.map((category) => (
            <Link href={category.link} key={category.id}>
              <CategoryCard>
                <CategoryImage>
                  <Image
                    src={category.image}
                    alt={category.name}
                    layout="fill"
                    objectFit="cover"
                    priority={category.id <= 2}
                  />
                </CategoryImage>
                <Overlay className="overlay" />
                <CategoryContent className="content">
                  <CategoryTitle>{category.name}</CategoryTitle>
                  <CategoryDescription>{category.description}</CategoryDescription>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>{category.itemCount} Items</span>
                    <ArrowIcon className="arrow">
                      <FiArrowRight size={20} />
                    </ArrowIcon>
                  </div>
                </CategoryContent>
              </CategoryCard>
            </Link>
          ))}
        </CategoryGrid>
      </PageContainer>
    </Layout>
  );
} 