'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import useFields, { Fields } from '../hooks/useFields';

export default function Admin() {
  const { page2Fields, page3Fields, updatePage2Fields, updatePage3Fields } =
    useFields();

  return (
    <div className="mt-20">
      <Card className="w-[600px]">
        <CardHeader>
          <CardTitle>Settings</CardTitle>
          <CardDescription>
            Manage onboarding components and pages.
          </CardDescription>
        </CardHeader>
        <CardContent className="my-8">
          <div className="flex h-5 items-center justify-between space-x-4 text-sm">
            <div className="font-semibold">Page 2</div>

            {(['About', 'Birthday', 'Address'] as Fields[]).map((field) => (
              <>
                <Separator orientation="vertical" />
                <div key={field} className="flex items-center gap-4">
                  <Switch
                    checked={page2Fields.includes(field)}
                    onCheckedChange={() => updatePage2Fields(field)}
                  />
                  {field}
                </div>
              </>
            ))}
          </div>

          <Separator className="my-8" />

          <div className="flex h-5 items-center justify-between space-x-4 text-sm">
            <div className="font-semibold">Page 3</div>

            {(['About', 'Birthday', 'Address'] as Fields[]).map((field) => (
              <>
                <Separator orientation="vertical" />
                <div key={field} className="flex items-center gap-4">
                  <Switch
                    checked={page3Fields.includes(field)}
                    onCheckedChange={() => updatePage3Fields(field)}
                  />
                  {field}
                </div>
              </>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
