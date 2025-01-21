import useFormStore from '@/app/hooks/useFormStore';
import { Input } from './input';
import { Label } from './label';
import { useEffect } from 'react';

export default function Page1() {
  const { formData, updateField } = useFormStore();

  useEffect(() => {
    console.log('formData', formData);
  }, [formData]);

  return (
    <form>
      <div className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            value={formData['email'] || ''}
            onChange={(e) => updateField('email', e.target.value)}
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="framework">Password</Label>
          <Input
            id="password"
            value={formData['password'] || ''}
            onChange={(e) => updateField('password', e.target.value)}
          />
        </div>
      </div>
    </form>
  );
}
