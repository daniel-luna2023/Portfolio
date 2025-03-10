// re_eNknk5Gq_N2YkiYE6GtJ1xpwMbff8zu2L
import { Resend } from "resend";
import { EmailTemplate } from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const dataForm = await req.json();
    try {
      const data = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ['oscargomezluna@gmail.com'],
        subject: "Ogomez landing",
        react: EmailTemplate({
          firstName: dataForm.userName,
          message: dataForm.message,
          email: dataForm.email,
        }),
        text: "O.Gomez",
      });
      return Response.json(data);
    } catch (error) {
      return Response.json({ error });
    }
  } catch (error) {
    return Response.json({ error });
  }
}
