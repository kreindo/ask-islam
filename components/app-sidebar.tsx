'use client';

import type { User } from 'next-auth';
import { useRouter } from 'next/navigation';

import { PlusIcon } from '@/components/icons';
import { SidebarHistory } from '@/components/sidebar-history';
import { SidebarUserNav } from '@/components/sidebar-user-nav';
import { Button } from '@/components/ui/button';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  useSidebar,
} from '@/components/ui/sidebar';
import Link from 'next/link';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';
import { CogIcon } from 'lucide-react';

export function AppSidebar({ user }: { user: User | undefined }) {
  const router = useRouter();
  const { setOpenMobile } = useSidebar();

  return (
    <Sidebar className="group-data-[side=left]:border-r-0">
      <SidebarHeader>
        <SidebarMenu>
          <div className="flex flex-row justify-between items-center">
            <Link
              href="/"
              onClick={() => {
                setOpenMobile(false);
              }}
              className="flex flex-row gap-3 items-center"
            >
              <span className="text-lg font-semibold px-2 flex flex-row items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:bg-muted rounded-md cursor-pointer">
                {/* add font based logo */}
                <span className="text-1xl font-bold">☪</span>
                Ask Islam
              </span>
            </Link>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  type="button"
                  className="p-2 h-fit"
                  onClick={() => {
                    setOpenMobile(false);
                    router.push('/');
                    router.refresh();
                  }}
                >
                  <PlusIcon />
                </Button>
              </TooltipTrigger>
              <TooltipContent align="end">New Chat</TooltipContent>
            </Tooltip>
          </div>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarHistory user={user} />
      </SidebarContent>
      <SidebarFooter>
        <div className="flex flex-row justify-between gap-2 items-center">
          {user && <SidebarUserNav user={user} />}
          {/* cog icon goes to settings page */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" onClick={() => router.push('/settings')} type="button" className="p-3 h-fit">
                <CogIcon />
              </Button>
            </TooltipTrigger>
            <TooltipContent align="end">Settings</TooltipContent>
          </Tooltip>
        </div>
      </SidebarFooter>

    </Sidebar>
  );
}
