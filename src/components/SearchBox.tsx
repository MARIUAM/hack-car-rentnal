// "use client"

// import * as React from "react"
// import { Check, ChevronsUpDown } from "lucide-react"

// import { cn } from "@/lib/utils"
// import { Button } from "@/components/ui/button"
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
// } from "@/components/ui/command"
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/command"


// const frameworks = [
//   {
//     value: "1",
//     label: "Next.js",
//   },
//   {
//     value: "sveltekit",
//     label: "SvelteKit",
//   },
//   {
//     value: "1",
//     label: "Nuxt.js",
//   },
//   {
//     value: "remix",
//     label: "Remix",
//   },
//   {
//     value: "astro",
//     label: "Astro",
//   },
// ]

// export function ComboboxDemo() {
//   const [open, setOpen] = React.useState(false)
//   const [value, setValue] = React.useState("")

//   return (
//     <Popover open={open} onOpenChange={setOpen}>
//       <PopoverTrigger asChild>
//         <Button
//           variant="outline"
//           role="combobox"
//           aria-expanded={open}
//           className="w-[200px] justify-between"
//         >
//           {value
//             ? frameworks.find((framework) => framework.value === value)?.label
//             : "Select framework..."}
//           <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
//         </Button>
//       </PopoverTrigger>
//       <PopoverContent className="w-[200px] p-0">
//         <Command>
//           <CommandInput placeholder="Search framework..." />
//           <CommandList>
//             <CommandEmpty>No framework found.</CommandEmpty>
//             <CommandGroup>
//               {frameworks.map((framework) => (
//                 <CommandItem
//                   key={framework.value}
//                   value={framework.value}
//                   onSelect={(currentValue: string) => {
//                     setValue(currentValue)
//                     setOpen(false)
//                   }}
//                 >
//                   <Check
//                     className={cn(
//                       "mr-2 h-4 w-4",
//                       value === framework.value ? "opacity-100" : "opacity-0"
//                     )}
//                   />
//                   {framework.label}
//                 </CommandItem>
//               ))}
//             </CommandGroup>
//           </CommandList>
//         </Command>
//       </PopoverContent>
//     </Popover>
//   )
// }

// "use client"

// import * as React from "react"
// import { Check, ChevronsUpDown } from "lucide-react"
// "use client"

// import * as React from "react"
// import { Check, ChevronsUpDown } from "lucide-react"

// import { cn } from "@/lib/utils"
// import { Button } from "@/components/ui/button"
// import {
//     Command,
//     CommandEmpty,
//     CommandGroup,
//     CommandInput,
//     CommandItem,
//     CommandList,
// } from "@/components/ui/command"
// import {
//     Popover,
//     PopoverContent,
//     PopoverTrigger,
// } from "@/components/ui/popover"

// const frameworks = [
//     {
//         value: "next.js",
//         label: "Next.js",
//     },
//     {
//         value: "sveltekit",
//         label: "SvelteKit",
//     },
//     {
//         value: "nuxt.js",
//         label: "Nuxt.js",
//     },
//     {
//         value: "remix",
//         label: "Remix",
//     },
//     {
//         value: "astro",
//         label: "Astro",
//     },
// ]

// export function ComboboxDemo() {
//     const [open, setOpen] = React.useState(false)
//     const [value, setValue] = React.useState("")

//     return (
//         <Popover open={open} onOpenChange={setOpen}>
//             <PopoverTrigger asChild>
//                 <Button
//                     variant="outline"
//                     role="combobox"
//                     aria-expanded={open}
//                     className="w-[200px] justify-between"
//                 >
//                     {value
//                         ? frameworks.find((framework) => framework.value === value)?.label
//                         : "Select framework..."}
//                     <ChevronsUpDown className="opacity-50" />
//                 </Button>
//             </PopoverTrigger>
//             <PopoverContent className="w-[200px] p-0">
//                 <Command>
//                     <CommandInput placeholder="Search framework..." className="h-9" />
//                     <CommandList>
//                         <CommandEmpty>No framework found.</CommandEmpty>
//                         <CommandGroup>
//                             {frameworks.map((framework) => (
//                                 <CommandItem
//                                     key={framework.value}
//                                     value={framework.value}
//                                     onSelect={(currentValue: string) => {
//                                         if (currentValue === value) {
//                                             setValue("");
//                                         } else {
//                                             setValue(currentValue);
//                                         }
//                                         setOpen(false);
//                                     }}
//                                 >
//                                         setValue(currentValue === value ? "" : currentValue)
//                                         setOpen(false)
//                                     }}
//                                 >
//                                     {framework.label}
//                                     <Check
//                                         className={cn(
//                                             "ml-auto",
//                                             value === framework.value ? "opacity-100" : "opacity-0"
//                                         )}
//                                     />
//                                 </CommandItem>
//                             ))}
//                         </CommandGroup>
//                     </CommandList>
//                 </Command>
//             </PopoverContent>
//         </Popover>
//     )
// }

