import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-11-01T00:00:00').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold font-heading text-primary">МАРАФОН СТРОЙНОСТИ</h1>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('results')} className="hover:text-primary transition-colors">Результаты</button>
              <button onClick={() => scrollToSection('program')} className="hover:text-primary transition-colors">Программа</button>
              <button onClick={() => scrollToSection('menu')} className="hover:text-primary transition-colors">Меню</button>
              <button onClick={() => scrollToSection('tariffs')} className="hover:text-primary transition-colors">Тарифы</button>
              <button onClick={() => scrollToSection('reviews')} className="hover:text-primary transition-colors">Отзывы</button>
              <button onClick={() => scrollToSection('contacts')} className="hover:text-primary transition-colors">Контакты</button>
            </div>
            <Button onClick={() => scrollToSection('contacts')} className="bg-primary hover:bg-primary/90">
              Записаться
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-pink-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold font-heading text-foreground mb-6 leading-tight">
                Преврати мечту о стройности в реальность!
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Присоединяйся к марафону и получи тело мечты за 30 дней! Правильное питание, поддержка экспертов и мотивация каждый день.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => scrollToSection('contacts')} className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
                  Начать сейчас
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('program')} className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-white">
                  Узнать больше
                </Button>
              </div>
              <div className="mt-8 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <p className="text-center text-sm font-semibold text-muted-foreground mb-4">До старта марафона осталось:</p>
                <div className="grid grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="bg-primary text-white rounded-xl p-4 mb-2">
                      <p className="text-4xl font-bold font-heading">{timeLeft.days}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">дней</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary text-white rounded-xl p-4 mb-2">
                      <p className="text-4xl font-bold font-heading">{timeLeft.hours}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">часов</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary text-white rounded-xl p-4 mb-2">
                      <p className="text-4xl font-bold font-heading">{timeLeft.minutes}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">минут</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary text-white rounded-xl p-4 mb-2">
                      <p className="text-4xl font-bold font-heading">{timeLeft.seconds}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">секунд</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex gap-8">
                <div>
                  <p className="text-3xl font-bold font-heading text-primary">100+</p>
                  <p className="text-sm text-muted-foreground">Участников</p>
                </div>
                <div>
                  <p className="text-3xl font-bold font-heading text-primary">-4-7 кг</p>
                  <p className="text-sm text-muted-foreground">Средний результат</p>
                </div>
                <div>
                  <p className="text-3xl font-bold font-heading text-primary">30 дней</p>
                  <p className="text-sm text-muted-foreground">Длительность</p>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/files/34267c62-2af3-40a8-9348-1acd55f035f8.JPG" 
                alt="Участница марафона"
                className="rounded-3xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="results" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-4">
              Результаты участников
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Реальные истории людей, которые изменили свою жизнь
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden animate-scale-in hover:shadow-xl transition-shadow">
              <img 
                src="https://cdn.poehali.dev/projects/f9a65751-b098-4cae-9e80-4a46638a6c98/files/efb104da-13ec-4faa-8145-38ee04429ee0.jpg"
                alt="Трансформация"
                className="w-full h-64 object-cover"
              />
              <CardHeader>
                <CardTitle className="font-heading">Анна, 28 лет</CardTitle>
                <CardDescription className="text-primary font-semibold">-12 кг за месяц</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Я не верила что смогу, но поддержка команды и правильная программа сделали своё дело!
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden animate-scale-in hover:shadow-xl transition-shadow" style={{ animationDelay: '0.1s' }}>
              <img 
                src="https://cdn.poehali.dev/projects/f9a65751-b098-4cae-9e80-4a46638a6c98/files/b5a8fb1b-cc70-4e9f-be9f-7dc917ffd85c.jpg"
                alt="Здоровое питание"
                className="w-full h-64 object-cover"
              />
              <CardHeader>
                <CardTitle className="font-heading">Мария, 35 лет</CardTitle>
                <CardDescription className="text-primary font-semibold">-8 кг за месяц</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Вкусные рецепты и никакого голода! Теперь это мой образ жизни.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden animate-scale-in hover:shadow-xl transition-shadow" style={{ animationDelay: '0.2s' }}>
              <img 
                src="https://cdn.poehali.dev/projects/f9a65751-b098-4cae-9e80-4a46638a6c98/files/73c6be4c-2f04-4bdf-8479-b97c509b2c6b.jpg"
                alt="Правильный завтрак"
                className="w-full h-64 object-cover"
              />
              <CardHeader>
                <CardTitle className="font-heading">Елена, 42 года</CardTitle>
                <CardDescription className="text-primary font-semibold">-10 кг за месяц</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  После 40 думала что невозможно похудеть. Марафон доказал обратное!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="program" className="py-16 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-4">
              Программа марафона
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Комплексный подход к здоровому образу жизни
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center animate-scale-in">
              <div className="w-24 h-24 mx-auto mb-6 bg-secondary rounded-full flex items-center justify-center">
                <Icon name="Apple" size={48} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold font-heading mb-3">Правильное питание</h3>
              <p className="text-muted-foreground">
                Индивидуальное меню с вкусными рецептами. Никакого голода и строгих ограничений!
              </p>
            </div>

            <div className="text-center animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-24 h-24 mx-auto mb-6 bg-primary rounded-full flex items-center justify-center">
                <Icon name="Dumbbell" size={48} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold font-heading mb-3">Тренировки</h3>
              <p className="text-muted-foreground">
                Эффективные упражнения для дома. От 20 минут в день для максимального результата.
              </p>
            </div>

            <div className="text-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-24 h-24 mx-auto mb-6 bg-secondary rounded-full flex items-center justify-center">
                <Icon name="Users" size={48} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold font-heading mb-3">Поддержка</h3>
              <p className="text-muted-foreground">
                Чат с единомышленниками и кураторами. Мотивация и ответы на вопросы 24/7.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-4">
              Примерное меню
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Вкусные и полезные блюда на каждый день
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="overflow-hidden animate-scale-in hover:shadow-xl transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <img src="https://cdn.poehali.dev/projects/f9a65751-b098-4cae-9e80-4a46638a6c98/files/dba8b03d-d41b-4eac-b8cd-df634307ccf1.jpg" alt="Здоровый завтрак" className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="font-heading">Завтрак</CardTitle>
                <CardDescription>07:00 - 09:00</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-secondary mt-0.5" size={16} />
                    <span>Овсяная каша с ягодами</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-secondary mt-0.5" size={16} />
                    <span>Греческий йогурт</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-secondary mt-0.5" size={16} />
                    <span>Зелёный чай</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="overflow-hidden animate-scale-in hover:shadow-xl transition-shadow" style={{ animationDelay: '0.1s' }}>
              <div className="relative h-64 overflow-hidden">
                <img src="https://cdn.poehali.dev/projects/f9a65751-b098-4cae-9e80-4a46638a6c98/files/d98ee7a8-4ccb-4d81-a2f8-b3a2b3868e1d.jpg" alt="Полезный обед" className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="font-heading">Обед</CardTitle>
                <CardDescription>13:00 - 15:00</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-secondary mt-0.5" size={16} />
                    <span>Куриная грудка на гриле</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-secondary mt-0.5" size={16} />
                    <span>Киноа с овощами</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-secondary mt-0.5" size={16} />
                    <span>Свежий салат</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="overflow-hidden animate-scale-in hover:shadow-xl transition-shadow" style={{ animationDelay: '0.2s' }}>
              <div className="relative h-64 overflow-hidden">
                <img src="https://cdn.poehali.dev/projects/f9a65751-b098-4cae-9e80-4a46638a6c98/files/1cd03e54-2170-42d6-9507-a41be7fdeabf.jpg" alt="Лёгкий ужин" className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="font-heading">Ужин</CardTitle>
                <CardDescription>18:00 - 20:00</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-secondary mt-0.5" size={16} />
                    <span>Запечённая рыба</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-secondary mt-0.5" size={16} />
                    <span>Овощи на пару</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-secondary mt-0.5" size={16} />
                    <span>Авокадо</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="tariffs" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-4">
              Тарифы участия
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выбери свой формат участия в марафоне
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="animate-scale-in hover:shadow-xl transition-all">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-heading mb-2">Базовый</CardTitle>
                <div className="mt-4">
                  <span className="text-5xl font-bold font-heading text-primary">2990₽</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="Check" className="text-secondary mt-1" size={20} />
                  <p>План питания на 30 дней</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" className="text-secondary mt-1" size={20} />
                  <p>Рецепты полезных блюд</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" className="text-secondary mt-1" size={20} />
                  <p>Общий чат участников</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" className="text-secondary mt-1" size={20} />
                  <p>Чек-листы и трекеры</p>
                </div>
                <Button className="w-full mt-6 bg-secondary hover:bg-secondary/90" size="lg" onClick={() => scrollToSection('contacts')}>
                  Выбрать тариф
                </Button>
              </CardContent>
            </Card>

            <Card className="animate-scale-in hover:shadow-xl transition-all border-2 border-primary relative" style={{ animationDelay: '0.1s' }}>
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                Популярный
              </div>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-heading mb-2">Стандарт</CardTitle>
                <div className="mt-4">
                  <span className="text-5xl font-bold font-heading text-primary">4990₽</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="Check" className="text-secondary mt-1" size={20} />
                  <p>Всё из тарифа "Базовый"</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" className="text-secondary mt-1" size={20} />
                  <p>Программа тренировок</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" className="text-secondary mt-1" size={20} />
                  <p>Видео-уроки упражнений</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" className="text-secondary mt-1" size={20} />
                  <p>Поддержка куратора</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" className="text-secondary mt-1" size={20} />
                  <p>Еженедельные вебинары</p>
                </div>
                <Button className="w-full mt-6 bg-primary hover:bg-primary/90" size="lg" onClick={() => scrollToSection('contacts')}>
                  Выбрать тариф
                </Button>
              </CardContent>
            </Card>

            <Card className="animate-scale-in hover:shadow-xl transition-all" style={{ animationDelay: '0.2s' }}>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-heading mb-2">Премиум</CardTitle>
                <div className="mt-4">
                  <span className="text-5xl font-bold font-heading text-primary">7990₽</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="Check" className="text-secondary mt-1" size={20} />
                  <p>Всё из тарифа "Стандарт"</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" className="text-secondary mt-1" size={20} />
                  <p>Персональный куратор 24/7</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" className="text-secondary mt-1" size={20} />
                  <p>Индивидуальный план питания</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" className="text-secondary mt-1" size={20} />
                  <p>Консультация нутрициолога</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" className="text-secondary mt-1" size={20} />
                  <p>Доступ к закрытому клубу</p>
                </div>
                <Button className="w-full mt-6 bg-secondary hover:bg-secondary/90" size="lg" onClick={() => scrollToSection('contacts')}>
                  Выбрать тариф
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-16 bg-gradient-to-br from-pink-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-4">
              Отзывы участников
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Что говорят те, кто уже прошёл марафон
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="animate-scale-in hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Лучший марафон! Похудела на 10 кг и чувствую себя невероятно. Спасибо команде за поддержку!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-bold text-primary">ОС</span>
                  </div>
                  <div>
                    <p className="font-semibold">Ольга Смирнова</p>
                    <p className="text-sm text-muted-foreground">31 год</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-scale-in hover:shadow-lg transition-shadow" style={{ animationDelay: '0.1s' }}>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Не думала что смогу готовить так вкусно и полезно. Рецепты супер, семья в восторге!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-bold text-primary">ТК</span>
                  </div>
                  <div>
                    <p className="font-semibold">Татьяна Королёва</p>
                    <p className="text-sm text-muted-foreground">38 лет</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-scale-in hover:shadow-lg transition-shadow" style={{ animationDelay: '0.2s' }}>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Отличная мотивация и поддержка! Марафон помог мне вернуться в форму после родов."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-bold text-primary">ИН</span>
                  </div>
                  <div>
                    <p className="font-semibold">Ирина Новикова</p>
                    <p className="text-sm text-muted-foreground">29 лет</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-scale-in hover:shadow-lg transition-shadow" style={{ animationDelay: '0.3s' }}>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Результат превзошёл ожидания! -12 кг за месяц, и это без голодания и стресса."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-bold text-primary">СП</span>
                  </div>
                  <div>
                    <p className="font-semibold">Светлана Петрова</p>
                    <p className="text-sm text-muted-foreground">44 года</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-scale-in hover:shadow-lg transition-shadow" style={{ animationDelay: '0.4s' }}>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Чат с участниками - это огромная поддержка! Все такие позитивные и мотивируют друг друга."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-bold text-primary">ДВ</span>
                  </div>
                  <div>
                    <p className="font-semibold">Дарья Волкова</p>
                    <p className="text-sm text-muted-foreground">26 лет</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-scale-in hover:shadow-lg transition-shadow" style={{ animationDelay: '0.5s' }}>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Тренировки простые но эффективные! Занимаюсь дома когда удобно, никаких оправданий."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-bold text-primary">АЛ</span>
                  </div>
                  <div>
                    <p className="font-semibold">Алина Лебедева</p>
                    <p className="text-sm text-muted-foreground">33 года</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-4">
                Запишись на марафон
              </h2>
              <p className="text-xl text-muted-foreground">
                Заполни форму и мы свяжемся с тобой в течение часа
              </p>
            </div>

            <Card className="animate-scale-in">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя *</Label>
                    <Input 
                      id="name" 
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input 
                      id="phone" 
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Комментарий</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Расскажите о своих целях..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                    Отправить заявку
                  </Button>
                </form>

                <div className="mt-8 pt-8 border-t">
                  <div className="flex items-center justify-center gap-8 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Icon name="Phone" size={20} className="text-primary" />
                      <span>+7 (928) 184-12-58</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Instagram" size={20} className="text-primary" />
                      <span>@nutriexpert_1</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-heading mb-2">МАРАФОН СТРОЙНОСТИ © 2024</p>
          <p className="text-sm text-white/70">Твой путь к идеальной фигуре начинается здесь</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;