'use client'
import { useForm } from 'react-hook-form'
import { saveLead } from '@/app/actions/saveLead'
import { toast } from 'sonner'
import styles from './leadForm.module.css'

export default function LeadForm() {
    const { register, handleSubmit, reset } = useForm()

    const onSubmit = async (data) => {
        if (data.honeypot) {
            console.warn('Bot detectado!')
            return
        }

        console.log('Enviando lead:', data) 
        try {
            await saveLead(data)
            toast.success('Sucesso, entraremos em contato')
            reset()
        } catch (e) {
            toast.error('Erro ao cadastrar, confira seus dados')
        }
    }
    
    return (
        <div className={styles.containerForm}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <input {...register('name')} placeholder="Seu nome" className={styles.input} required />
                <input {...register('email')} placeholder="Seu e-mail" className={styles.input} required />
                <input {...register('honeypot')} type="text" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
                <button type="submit" className={styles.button}>Entrar em Contato</button>
            </form>
        </div>
    )
}