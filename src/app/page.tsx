import Image from "next/image";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Hero from "@/views/Hero";
import Promotions from "@/views/Promotions";
import Products from "@/views/Products";

export default function Home() {
  return (
    <>
      <Hero />
      <Promotions/>
      <Products/>
    </>
  );
}
