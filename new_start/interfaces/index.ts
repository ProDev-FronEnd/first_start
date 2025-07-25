// interfaces/index.ts

/**
 * Interface for Card component props
 */
export interface CardProps {
  title: string
  content: string
}

/**
 * Interface for Button component props
 */
export interface ButtonProps {
  label: string;
  
  size: 'small' | 'medium' | 'large'
  shape: 'rounded-sm' | 'rounded-md' | 'rounded-full'
  children: React.ReactNode
  onClick?: () => void
}

/**
 * Interface for PostCard component props
 */
export interface PostProps {
  id: number;
  title: string;
  userId: number;
  // interfaces/index.ts

  content: string; // <-- must match what you're passing
}


/**
 * Interface for UserCard component props
 */
export interface UserProps {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}

