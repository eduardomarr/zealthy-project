'use client';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { deleteUser, fetchUsers } from '../services/users';
import { User } from '../hooks/useFormStore';
import { Button } from '@/components/ui/button';

export default function Data() {
  const queryClient = useQueryClient();

  const { data } = useQuery({ queryKey: ['users'], queryFn: fetchUsers });
  const mutation = useMutation({
    mutationFn: (userId: number) => {
      return deleteUser(userId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });

  return (
    <main>
      <Table>
        <TableCaption>A list of your recent Users.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>E-mail</TableHead>
            <TableHead>Password</TableHead>
            <TableHead>Birthday</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>About</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((user: User) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{user?.id}</TableCell>
              <TableCell>{user?.email}</TableCell>
              <TableCell>{user?.password}</TableCell>
              <TableCell>{user?.birthday}</TableCell>
              <TableCell>{user?.address}</TableCell>
              <TableCell>{user?.about}</TableCell>
              <TableCell>
                <Button
                  className="mx-8"
                  variant="outline"
                  onClick={() => mutation.mutate(user.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  );
}
