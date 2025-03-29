'use server'

import { supabase } from '../../lib/supabaseClient';

export async function saveLead(data) {
    const { name, email } = data;

    if (!name || !email || !email.includes('@')) {
        throw new Error('Dados inválidos');
    }

    const { error } = await supabase
        .from('leads')
        .insert([{ name, email }]);

    if (error) {
        throw new Error(error.message); 
    }
}
