"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { signOut, useSession } from "next-auth/react";

export default function SettingsPage() {
  const router = useRouter();
  const session = useSession();
  const [activeTab, setActiveTab] = useState("account");

  // Mock user data - this would come from your authentication system
  const user = {
    name: session?.data?.user?.email,
    email: session?.data?.user?.email,
    plan: "Free Plan",
    messageUsage: 0,
    messageLimit: 10,
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-2 justify-between w-full md:max-w-6xl mx-auto">
          <div className="flex items-center gap-2">
            <Button variant="ghost" onClick={() => router.push("/")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to Chat
            </Button>
          </div>
          <Button variant="ghost" onClick={() => signOut()}>
            Sign out
          </Button>
        </div>
      </header>

      <div className="container mx-auto py-8 px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8">
          {/* User Profile Panel */}
          <div className="flex flex-col items-center space-y-4">
            <div className="size-32 rounded-full bg-emerald-600 flex items-center justify-center text-white text-3xl">
              {session?.data?.user?.email?.charAt(0)}
            </div>
            <h2 className="text-2xl font-bold">
              {session?.data?.user?.email?.split("@")[0]}
            </h2>
            <p className="text-sm text-muted-foreground">
              {session?.data?.user?.email}
            </p>
            <div className="bg-background border rounded-md px-4 py-2 text-center w-full">
              <span className="text-sm font-medium">{user.plan}</span>
            </div>

            {/* Message Usage */}
            <div className="w-full space-y-2 mt-4">
              <div className="flex justify-between text-sm">
                <span>Message Usage (WIP)</span>
                <span>
                  {user.messageUsage}/{user.messageLimit}
                </span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div
                  className="bg-emerald-600 h-2 rounded-full"
                  style={{
                    width: `${(user.messageUsage / user.messageLimit) * 100}%`,
                  }}
                ></div>
              </div>
              <p className="text-xs text-muted-foreground">
                Resets daily at 00:00 AM
              </p>
            </div>

            {/* Keyboard Shortcuts */}
            <div className="w-full space-y-2 mt-4 border rounded-md p-4">
              <h3 className="font-medium mb-2">Keyboard Shortcuts</h3>
              <div className="flex justify-between text-sm py-1">
                <span>Search</span>
                <div className="flex gap-1">
                  <span className="bg-secondary rounded px-2 text-xs py-1">
                    Ctrl
                  </span>
                  <span className="bg-secondary rounded px-2 text-xs py-1">
                    K
                  </span>
                </div>
              </div>
              <div className="flex justify-between text-sm py-1">
                <span>New Chat</span>
                <div className="flex gap-1">
                  <span className="bg-secondary rounded px-2 text-xs py-1">
                    Ctrl
                  </span>
                  <span className="bg-secondary rounded px-2 text-xs py-1">
                    N
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Settings Content */}
          <div>
            <Tabs
              defaultValue="account"
              value={activeTab}
              onValueChange={setActiveTab}
            >
              <TabsList className="grid grid-cols-6 mb-8">
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="customization">Customization</TabsTrigger>
                <TabsTrigger value="history">History & Sync</TabsTrigger>
                <TabsTrigger value="models">Models</TabsTrigger>
                <TabsTrigger value="attachments">Attachments</TabsTrigger>
                <TabsTrigger value="contact">Contact Us</TabsTrigger>
              </TabsList>

              <TabsContent value="account" className="space-y-8">
                {/* Upgrade to Pro Section */}
                <div className="border rounded-lg p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Upgrade to Pro</h2>
                    <div className="text-3xl font-bold">
                      $8
                      <span className="text-lg font-normal text-muted-foreground">
                        /month
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-emerald-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                        <h3 className="font-semibold">
                          Generous Message Limits
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Send over 1,500 messages per month*
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-emerald-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                        </svg>
                        <h3 className="font-semibold">All AI Models</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Get access to our full suite of models including
                        advanced Islamic knowledge models
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-emerald-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                          <rect
                            x="8"
                            y="2"
                            width="8"
                            height="4"
                            rx="1"
                            ry="1"
                          />
                        </svg>
                        <h3 className="font-semibold">Priority Support</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Get faster responses and dedicated assistance
                      </p>
                    </div>
                  </div>

                  <Button className="w-full md:w-auto bg-emerald-600 hover:bg-emerald-700">
                    Upgrade Now
                  </Button>

                  <p className="text-xs text-muted-foreground mt-4">
                    * Advanced model usage is limited to 100 messages per month.
                    Premium credits can be purchased separately.
                  </p>
                </div>

                {/* Danger Zone */}
                <div className="border border-destructive/20 rounded-lg p-6 bg-destructive/5">
                  <h2 className="text-xl font-bold text-destructive mb-4">
                    Danger Zone
                  </h2>
                  <p className="mb-4 text-sm">
                    Permanently delete your account and all associated data.
                  </p>
                  <Button variant="destructive">Delete Account</Button>
                </div>
              </TabsContent>

              <TabsContent value="customization">
                <div className="border rounded-lg p-6">
                  <h2 className="text-xl font-bold mb-4">Appearance</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">Theme</h3>
                      <div className="flex gap-4">
                        <Button variant="outline" className="flex-1">
                          Light
                        </Button>
                        <Button variant="outline" className="flex-1">
                          Dark
                        </Button>
                        <Button variant="outline" className="flex-1">
                          System
                        </Button>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium mb-2">Font Size</h3>
                      <div className="flex gap-4">
                        <Button variant="outline" className="flex-1">
                          Small
                        </Button>
                        <Button
                          variant="outline"
                          className="flex-1 bg-primary text-primary-foreground"
                        >
                          Medium
                        </Button>
                        <Button variant="outline" className="flex-1">
                          Large
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="history">
                <div className="border rounded-lg p-6">
                  <h2 className="text-xl font-bold mb-4">History & Sync</h2>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">
                          Sync chat history across devices
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Keep your chat history available on all your devices
                        </p>
                      </div>
                      <div className="h-6 w-12 bg-emerald-600 rounded-full relative cursor-pointer">
                        <div className="absolute right-1 top-1 bg-white rounded-full size-4"></div>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="font-medium mb-2">Clear History</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Delete all your chat conversations
                      </p>
                      <Button variant="outline">Clear All History</Button>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="models">
                <div className="border rounded-lg p-6">
                  <h2 className="text-xl font-bold mb-4">AI Models</h2>
                  <div className="space-y-4">
                    <div className="border p-4 rounded-lg flex justify-between items-center">
                      <div className="flex items-center gap-4">
                        <span className="text-4xl text-emerald-600 dark:text-emerald-400">
                          ☪
                        </span>
                        <div>
                          <h3 className="font-medium">Ask Islam</h3>
                          <p className="text-sm text-muted-foreground">
                            Islamic knowledge assistant for Quran, Hadith, and
                            Islamic teachings
                          </p>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        className="bg-primary text-primary-foreground"
                      >
                        Default
                      </Button>
                    </div>

                    <div className="border p-4 rounded-lg flex justify-between items-center opacity-50">
                      <div>
                        <h3 className="font-medium">
                          Custom Islamic Knowledge Model
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Coming soon - Specialized model fine-tuned on Islamic
                          texts
                        </p>
                      </div>
                      <Button variant="outline" disabled>
                        Coming Soon
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="attachments">
                <div className="border rounded-lg p-6">
                  <h2 className="text-xl font-bold mb-4">Attachments</h2>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Manage files and documents you&apos;ve shared with Ask
                      Islam
                    </p>

                    <div className="border p-4 rounded-lg">
                      <p className="text-center text-muted-foreground py-8">
                        You haven&apos;t uploaded any attachments yet
                      </p>
                    </div>

                    <Button
                      variant="outline"
                      onClick={() =>
                        alert("Upload a file is not available yet")
                      }
                    >
                      Upload a File
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="contact">
                <div className="border rounded-lg p-6">
                  <h2 className="text-xl font-bold mb-4">Contact Us</h2>
                  <div className="space-y-4">
                    <p className="text-sm">
                      Have a question or need assistance? Reach out to our team.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border p-4 rounded-lg">
                        <h3 className="font-medium mb-2">Request a Feature</h3>
                        <p className="text-sm text-muted-foreground">
                          Suggest a new feature or improvement
                        </p>
                        <Button
                          variant="outline"
                          className="mt-4"
                          onClick={() =>
                            window.open(
                              "https://askislam.featurebase.app",
                              "_blank"
                            )
                          }
                        >
                          Request Feature
                        </Button>
                      </div>
                      <div className="border p-4 rounded-lg">
                        <h3 className="font-medium mb-2">Report a Bug</h3>
                        <p className="text-sm text-muted-foreground">
                          Report an issue or bug
                        </p>
                        <Button
                          variant="outline"
                          className="mt-4"
                          onClick={() =>
                            window.open(
                              "https://askislam.featurebase.app",
                              "_blank"
                            )
                          }
                        >
                          Report Bug
                        </Button>
                      </div>
                      <div className="border p-4 rounded-lg">
                        <h3 className="font-medium mb-2">Email Support</h3>
                        <p className="text-sm text-muted-foreground">
                          Send us an email at support@askislam.com
                        </p>
                        <Button
                          variant="outline"
                          className="mt-4"
                          onClick={() =>
                            alert("Email support is not available yet")
                          }
                        >
                          Send Email
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
