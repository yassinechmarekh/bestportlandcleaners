import MyInput from "@/components/Form/MyInput";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Profile() {
  return (
    <section className={"bg-pink-100 min-h-screen"}>
      <div className="container">
        <div className="flex-1 space-y-4 py-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Profile</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <form>
            <div class="space-y-12">
              <div class="border-b border-gray-900/10 pb-12">
                <h2 class="text-base/7 font-semibold text-rose-bonbon">
                  Profile
                </h2>
                <p class="mt-1 text-sm/6 text-gray-600">
                  This information will be displayed publicly so be careful what
                  you share.
                </p>

                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div class="sm:col-span-4">
                    <label
                      for="username"
                      class="block text-sm/6 font-medium text-steel-blue"
                    >
                      Username
                    </label>
                    <div class="mt-2">
                      <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-rose-bonbon sm:max-w-md">
                        <span class="hidden xs:flex select-none items-center pl-3 text-rose-bonbon sm:text-sm">
                          bestportlandcleaners.com/
                        </span>
                        <input
                          type="text"
                          name="username"
                          id="username"
                          autocomplete="username"
                          class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 outline-none sm:text-sm/6"
                          placeholder="janesmith"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="col-span-full">
                    <label
                      for="photo"
                      class="block text-sm/6 font-medium text-steel-blue"
                    >
                      Photo
                    </label>
                    <div class="mt-2 flex items-center gap-x-3">
                      <svg
                        class="size-12 text-gray-300"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <button
                        type="button"
                        class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-rose-bonbon shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                      >
                        Change
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="border-b border-gray-900/10 pb-12">
                <h2 class="text-base/7 font-semibold text-rose-bonbon">
                  Personal Information
                </h2>
                <p class="mt-1 text-sm/6 text-gray-600">
                  Use a permanent address where you can receive mail.
                </p>

                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div class="sm:col-span-3">
                    <MyInput
                      label="First name"
                      placeholder="First Name"
                      type="text"
                      id="first-name"
                    />
                  </div>

                  <div class="sm:col-span-3">
                    <MyInput
                      label="Last name"
                      placeholder="Last Name"
                      type="text"
                      id="last-name"
                    />
                  </div>

                  <div class="sm:col-span-6">
                    <MyInput
                      label="Email address"
                      placeholder="Email"
                      type="email"
                      id="email"
                    />
                  </div>

                  <div class="sm:col-span-2">
                    <MyInput
                      label="Current Password"
                      placeholder="Your current password"
                      type="password"
                      id="current-password"
                    />
                  </div>

                  <div class="sm:col-span-2">
                    <MyInput
                      label="New Password"
                      placeholder="New password"
                      type="password"
                      id="new-password"
                    />
                  </div>

                  <div class="sm:col-span-2">
                    <MyInput
                      label="Confirm Password"
                      placeholder="Confirm password"
                      type="password"
                      id="confirm-password"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="button"
                class="text-sm/6 font-semibold text-gray-900"
              >
                Cancel
              </button>
              <button
                type="submit"
                class="rounded-md bg-rose-bonbon px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
