import { createContext, useContext, useState, ReactNode } from 'react';

export interface Reservation {
  id: number;
  arrangementId: number;
  name: string;
  startDate: string;
  price: number;
  image: string;
  status: 'confirmed';
  canCancel: boolean;
  category: 'europe' | 'summer' | 'winter';
}

interface ReservationContextType {
  reservations: Reservation[];
  reservedArrangements: Set<number>;
  addReservation: (arrangement: {
    id: number;
    name: string;
    price: number;
    image: string;
    category: 'europe' | 'summer' | 'winter';
  }) => void;
  removeReservation: (id: number) => void;
  isReserved: (arrangementId: number) => boolean;
}

const ReservationContext = createContext<ReservationContextType | undefined>(undefined);

export const useReservation = () => {
  const context = useContext(ReservationContext);
  if (!context) {
    throw new Error('useReservation must be used within a ReservationProvider');
  }
  return context;
};

interface ReservationProviderProps {
  children: ReactNode;
}

export const ReservationProvider = ({ children }: ReservationProviderProps) => {
  const [reservations, setReservations] = useState<Reservation[]>(() => {
    // Load from localStorage on initialization
    const saved = localStorage.getItem('reservations');
    return saved ? JSON.parse(saved) : [
      {
        id: 1,
        arrangementId: 999,
        name: "Prague & Budapest",
        startDate: "2025-04-15",
        price: 459,
        image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        status: "confirmed" as const,
        canCancel: true,
        category: "europe" as const
      },
      {
        id: 2,
        arrangementId: 998,
        name: "Maldives Paradise",
        startDate: "2025-06-20",
        price: 1299,
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        status: "confirmed" as const,
        canCancel: true,
        category: "summer" as const
      }
    ];
  });

  const reservedArrangements = new Set(reservations.map(r => r.arrangementId));

  const addReservation = (arrangement: {
    id: number;
    name: string;
    price: number;
    image: string;
    category: 'europe' | 'summer' | 'winter';
  }) => {
    const newReservation: Reservation = {
      id: Date.now(), // Simple ID generation
      arrangementId: arrangement.id,
      name: arrangement.name,
      startDate: getRandomFutureDate(),
      price: arrangement.price,
      image: arrangement.image,
      status: 'confirmed',
      canCancel: true,
      category: arrangement.category
    };

    const updatedReservations = [...reservations, newReservation];
    setReservations(updatedReservations);
    localStorage.setItem('reservations', JSON.stringify(updatedReservations));
  };

  const removeReservation = (id: number) => {
    const updatedReservations = reservations.filter(r => r.id !== id);
    setReservations(updatedReservations);
    localStorage.setItem('reservations', JSON.stringify(updatedReservations));
  };

  const isReserved = (arrangementId: number) => {
    return reservedArrangements.has(arrangementId);
  };

  const getRandomFutureDate = () => {
    const today = new Date();
    const futureDate = new Date(today);
    futureDate.setDate(today.getDate() + Math.floor(Math.random() * 90) + 30); // 30-120 days from now
    return futureDate.toISOString().split('T')[0];
  };

  return (
    <ReservationContext.Provider value={{ 
      reservations, 
      reservedArrangements, 
      addReservation, 
      removeReservation, 
      isReserved 
    }}>
      {children}
    </ReservationContext.Provider>
  );
};