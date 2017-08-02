from django import forms


class MailForm(forms.Form):
    contact_name = forms.CharField(required=True)
    contact_email = forms.EmailField(required=True)
    contact_phone = forms.CharField(required=False)
    content = forms.CharField(
        required=True,
        widget=forms.Textarea,
    )
