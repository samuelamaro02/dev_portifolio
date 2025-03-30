'use server'

import { supabase } from '../../lib/supabaseClient';

export async function saveLead(data) {
    const { name, email, honeypot, timestamp } = data;

    if (honeypot) {
        throw new Error('Bot detectado');
    }

    const timeElapsed = Date.now() - Number(timestamp);
    if (timeElapsed < 3000) {
        throw new Error('Preenchimento muito rápido, possível bot');
    }

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
