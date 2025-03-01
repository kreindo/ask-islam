import { auth } from '@/app/(auth)/auth';
import { redirect } from 'next/navigation';

export default async function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.user) {
    redirect('/sign-in');
  }

  return <>{children}</>;
} 