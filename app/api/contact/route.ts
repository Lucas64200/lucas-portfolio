import { Resend } from "resend";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !message.trim()
  ) {
    return Response.json(
      { error: "Merci de remplir tous les champs." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;

  if (!apiKey || !contactEmail) {
    return Response.json(
      {
        error:
          "Le formulaire de contact n'est pas encore configuré (RESEND_API_KEY / CONTACT_EMAIL manquants). Contacte-moi directement par email en attendant.",
      },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: contactEmail,
    replyTo: email,
    subject: `Nouveau message de ${name} (portfolio)`,
    text: `De : ${name} <${email}>\n\n${message}`,
  });

  if (error) {
    return Response.json(
      { error: "Échec de l'envoi du message. Réessaie plus tard." },
      { status: 502 }
    );
  }

  return Response.json({ ok: true });
}
