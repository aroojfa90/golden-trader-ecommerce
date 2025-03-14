import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

const CategorySection = styled.section`
  padding: 4rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  font-family: 'Playfair Display', serif;
  color: #333;

  &:after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background: #b8860b;
    margin: 1rem auto;
  }
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 568px) {
    grid-template-columns: 1fr;
  }
`;

const CategoryCard = styled.div`
  position: relative;
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);

    .overlay {
      background: rgba(0, 0, 0, 0.3);
    }

    .content {
      transform: translateY(-10px);
    }
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  transition: background 0.3s ease;
`;

const CategoryContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  color: white;
  transition: transform 0.3s ease;

  h3 {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
    font-family: 'Playfair Display', serif;
  }

  p {
    font-size: 1rem;
    margin-bottom: 1rem;
    opacity: 0.9;
  }
`;

const ShopButton = styled.span`
  display: inline-block;
  padding: 0.75rem 2rem;
  background: #b8860b;
  color: white;
  border-radius: 25px;
  font-weight: 500;
  transition: background 0.3s ease;

  &:hover {
    background: #96700a;
  }
`;

const categories = [
  {
    id: 1,
    name: "Makeup",
    description: "Discover premium beauty essentials",
    image: "https://images.pexels.com/photos/2688992/pexels-photo-2688992.jpeg?auto=compress&cs=tinysrgb&w=1600",
    link: "/makeup"
  },
  {
    id: 2,
    name: "Skincare",
    description: "Achieve your perfect skincare routine",
    image: "https://images.pexels.com/photos/3785170/pexels-photo-3785170.jpeg?auto=compress&cs=tinysrgb&w=1600",
    link: "/skincare"
  },
  {
    id: 3,
    name: "Haircare",
    description: "Professional hair care solutions",
    image: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1600",
    link: "/haircare"
  },
  {
    id: 4,
    name: "Fragrances",
    description: "Luxury perfumes and scents",
    image: "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=1600",
    link: "/fragrances"
  },
  {
    id: 5,
    name: "Tools & Brushes",
    description: "Professional beauty tools",
    image: "https://images.pexels.com/photos/4620874/pexels-photo-4620874.jpeg?auto=compress&cs=tinysrgb&w=1600",
    link: "/tools"
  },
  {
    id: 6,
    name: "New Arrivals",
    description: "Latest beauty trends and products",
    image: "https://images.pexels.com/photos/2633986/pexels-photo-2633986.jpeg?auto=compress&cs=tinysrgb&w=1600",
    link: "/new-arrivals"
  }
];

export default function ShopByCategory() {
  return (
    <CategorySection>
      <SectionTitle>Shop By Category</SectionTitle>
      <CategoryGrid>
        {categories.map((category) => (
          <Link href={category.link} key={category.id}>
            <CategoryCard>
              <Image
                src={category.image}
                alt={category.name}
                layout="fill"
                objectFit="cover"
                quality={90}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkLUEwLi0tLS0tQT5AQEA+QEBAQEBAQEBAQEBAQEBAQEBAQEBAQED/2wBDAR4eHh4eHiMeHiMmIyYjJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJib/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
              <Overlay className="overlay" />
              <CategoryContent className="content">
                <h3>{category.name}</h3>
                <p>{category.description}</p>
                <ShopButton>Shop Now</ShopButton>
              </CategoryContent>
            </CategoryCard>
          </Link>
        ))}
      </CategoryGrid>
    </CategorySection>
  );
} 