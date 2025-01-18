import { Input } from './input';
import { Label } from './label';

export default function Page2() {
  return (
    <form>
      <div className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="name">Email</Label>
          <Input id="name" placeholder="Name of your project" />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="framework">Password</Label>
          <Input id="name" placeholder="Name of your project" />
        </div>
      </div>
    </form>
  );
}
