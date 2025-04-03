import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_DATABASE_ID;

export async function saveToNotion(name, email, telefone) {
    try {
        await notion.pages.create({
            parent: { database_id: databaseId },
            properties: {
                name: { title: [{ text: { content: name } }] }, 
                email: { email: email },
                telefone: { phone_number: telefone }
            }
        });
    } catch (error) {
        console.error('Erro ao salvar no Notion:', error);
        throw new Error('Erro ao salvar lead no Notion');
    }
}

