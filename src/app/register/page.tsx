'use client';

import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { usePage } from '../hooks/usePage';

export default function Register() {
  const { currentPage, renderPage, nextPage, prevPage, getProgressValue } =
    usePage();

  return (
    <>
      <div className="w-[400px] my-20">
        <Progress value={getProgressValue()} />
      </div>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
        <CardContent>{renderPage()}</CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={prevPage} disabled={currentPage === 1}>
            Back
          </Button>

          {currentPage === 3 ? (
            <Button>Submit</Button>
          ) : (
            <Button onClick={nextPage}>Next</Button>
          )}
        </CardFooter>
      </Card>
    </>
  );
}
