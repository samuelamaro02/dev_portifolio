'use server';

import { saveLeadToNotion } from '../../lib/notionClient';

export async function saveLeadNotion(data) {
    const { name, email, telefone, honeypot, timestamp } = data;

    if (honeypot) {
        throw new Error('Bot detectado');
    }

    const timeElapsed = Date.now() - Number(timestamp);
    if (timeElapsed < 3000) {
        throw new Error('Preenchimento muito rápido, possível bot');
    }

    if (!name || !telefone || !email || !email.includes('@')) {
        throw new Error('Dados inválidos');
    }

    await saveLeadToNotion({ name, email, telefone });
}
