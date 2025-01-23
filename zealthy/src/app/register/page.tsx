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

import useFormStore, { User } from '../hooks/useFormStore';
import { usePage } from '../hooks/usePage';
import { useMutation } from '@tanstack/react-query';
import { createUser } from '../services/users';
import { useMemo } from 'react';

export default function Register() {
  const {
    currentPage,
    renderPage,
    nextPage,
    prevPage,
    getProgressValue,
    setPage,
  } = usePage();

  const { getForm, clearForm } = useFormStore();

  const { email, password } = getForm();

  const mutation = useMutation({
    mutationFn: (user: User) => {
      return createUser(user);
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      mutation.mutate(getForm());
      clearForm();
      setPage(1);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const isDisabled = useMemo(() => {
    return !email || !password;
  }, [email, password]);

  return (
    <>
      <div className="w-[400px] my-20">
        <Progress value={getProgressValue()} />
      </div>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>register a user with custom fields.</CardDescription>
        </CardHeader>
        <CardContent>{renderPage()}</CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={prevPage} disabled={currentPage === 1}>
            Back
          </Button>

          {currentPage === 3 ? (
            <Button onClick={handleSubmit} disabled={isDisabled}>
              Submit
            </Button>
          ) : (
            <Button onClick={nextPage}>Next</Button>
          )}
        </CardFooter>
      </Card>
    </>
  );
}
