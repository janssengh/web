import tkinter as tk


janela = tk.Tk()
janela.geometry('350x200')

label=tk.Label(janela,text="Linguagens favoritas")
listbox=tk.Listbox(janela)
listbox.insert(1,"Python")
listbox.insert(2,"Java")
listbox.insert(3, "C#")
listbox.insert(4,"C++")

label.pack()
listbox.pack()

janela.mainloop()
