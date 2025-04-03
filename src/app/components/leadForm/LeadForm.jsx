'use client'
import { useForm, Controller } from 'react-hook-form';
import { InputMask } from 'primereact/inputmask';
import { saveLead } from '@/app/actions/saveLead';
import { toast } from 'sonner';
import styles from './leadForm.module.css';
import { FaWhatsapp } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

export default function LeadForm() {
  const router = useRouter();
  const { register, handleSubmit, reset, control } = useForm();

  const onSubmit = async (data) => {
    if (data.honeypot) {
      return;
    }
    try {
      await saveLead(data);
      toast.success('Sucesso, entraremos em contato');
      reset();
      //router.push('/obrigado');
    } catch (e) {
      toast.error('Erro ao cadastrar, confira seus dados');
    }
  };

  return (
    <div className={styles.containerForm}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <input
          {...register('name')}
          placeholder="Seu nome"
          className={styles.input}
          required
        />
        <input
          {...register('email')}
          placeholder="Seu e-mail"
          className={styles.input}
          required
        />

        <Controller
          name="telefone"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputMask
              value={value}
              onChange={(e) => onChange(e.target.value)}
              onBlur={onBlur}
              mask="(99) 99999-9999"
              placeholder="Seu número"
              className={styles.input}
            />
          )}
        />

        <input
          {...register('honeypot')}
          type="text"
          style={{ display: 'none' }}
          tabIndex="-1"
          autoComplete="off"
        />

        <button type="submit" className={styles.button}>
          <FaWhatsapp width={30} height={30} />
          Entrar em Contato
        </button>
      </form>
    </div>
  );
}
