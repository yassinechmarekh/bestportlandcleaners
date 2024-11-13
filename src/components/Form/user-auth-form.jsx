import { React, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { FaGoogle } from "react-icons/fa6";
import { ImSpinner8 } from "react-icons/im";

export function UserAuthForm() {
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div className={"grid gap-6"}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              className={
                "focus-visible:ring-offset-1 focus-visible:ring-offset-transparent focus-visible:ring-rose-bonbon focus-visible:ring-1 focus-visible:placeholder:text-rose-bonbon"
              }
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              className={
                "focus-visible:ring-offset-1 focus-visible:ring-offset-transparent focus-visible:ring-rose-bonbon focus-visible:ring-1 focus-visible:placeholder:text-rose-bonbon"
              }
              id="password"
              placeholder="Password"
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Login
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-slate-400" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-pink-100 px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button
        variant="outline"
        type="button"
        disabled={isLoading}
        className={"text-rose-bonbon hover:text-pink-500"}
      >
        {isLoading ? (
          <ImSpinner8 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <FaGoogle className="mr-2 h-4 w-4" />
        )}{" "}
        Google
      </Button>
    </div>
  );
}
