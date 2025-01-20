import useFields from '@/app/hooks/useFields';
import { Input } from './input';
import { Label } from './label';

export default function Page3() {
  const { page3Fields } = useFields();

  return (
    <form>
      <div className="grid w-full items-center gap-4">
        {page3Fields.map((field) => (
          <div key={field} className="flex flex-col space-y-1.5">
            <Label htmlFor={field}>{field}</Label>
            <Input id={field} placeholder={`Your ${field}`} />
          </div>
        ))}
      </div>
    </form>
  );
}
