
import { useState } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/use-toast";

export interface ReservationData {
  name: string;
  email: string;
  phone: string;
  date: Date;
  party_size: number;
  special_requests?: string;
}

export const useReservations = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const createReservation = async (data: ReservationData) => {
    try {
      setIsSubmitting(true);
      
      const { error } = await supabase
        .from('reservations')
        .insert([{
          name: data.name,
          email: data.email,
          phone: data.phone,
          date: data.date.toISOString(),
          party_size: data.party_size,
          special_requests: data.special_requests,
        }]);
      
      if (error) {
        throw error;
      }
      
      toast({
        title: "Reservation Confirmed",
        description: "Your table has been reserved. We look forward to welcoming you!",
      });
      
      return { success: true };
    } catch (error) {
      console.error('Error creating reservation:', error);
      
      toast({
        title: "Reservation Failed",
        description: "There was a problem creating your reservation. Please try again.",
        variant: "destructive",
      });
      
      return { success: false, error };
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return {
    createReservation,
    isSubmitting
  };
};
